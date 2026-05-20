import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const sourceLabel = "mamakquant.com contact form";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

type NormalizedContact = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(values: NormalizedContact, submittedAt: string) {
  const rows = [
    ["Name", values.name],
    ["Email", values.email],
    ["Company / Organization", values.company || "Not provided"],
    ["Subject", values.subject || "Website enquiry"],
    ["Submitted", submittedAt],
    ["Source", sourceLabel],
  ];

  return `
    <div style="font-family:Inter,Arial,sans-serif;color:#0f172a;line-height:1.6">
      <h1 style="font-size:20px;margin:0 0 16px">New MAMAKQUANT contact enquiry</h1>
      <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="border:1px solid #e2e8f0;padding:10px 12px;font-weight:700;background:#f8fafc;width:210px">${escapeHtml(label)}</td>
                  <td style="border:1px solid #e2e8f0;padding:10px 12px">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
      <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;background:#f8fafc">
        <p style="font-weight:700;margin:0 0 8px">Message</p>
        <p style="white-space:pre-wrap;margin:0">${escapeHtml(values.message)}</p>
      </div>
    </div>
  `;
}

function buildEmailText(values: NormalizedContact, submittedAt: string) {
  return [
    "New MAMAKQUANT contact enquiry",
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company / Organization: ${values.company || "Not provided"}`,
    `Subject: ${values.subject || "Website enquiry"}`,
    `Submitted timestamp: ${submittedAt}`,
    `Source: ${sourceLabel}`,
    "",
    "Message:",
    values.message,
  ].join("\n");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    const body = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { ok: false, error: "Invalid request payload." },
        { status: 400 },
      );
    }

    payload = body as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 },
    );
  }

  const values = {
    name: clean(payload.name),
    email: clean(payload.email).toLowerCase(),
    company: clean(payload.company),
    subject: clean(payload.subject),
    message: clean(payload.message),
  };
  const honeypot = clean(payload.website);

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const fieldErrors: FieldErrors = {};

  if (!values.name) fieldErrors.name = "Name is required.";
  if (!values.email) {
    fieldErrors.email = "Email is required.";
  } else if (!emailPattern.test(values.email)) {
    fieldErrors.email = "Enter a valid email address.";
  }
  if (!values.message) {
    fieldErrors.message = "Message is required.";
  } else if (values.message.length < 10) {
    fieldErrors.message = "Message must be at least 10 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields.", fieldErrors },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("MAMAKQUANT contact form is missing required email environment variables.");
    return NextResponse.json(
      { ok: false, error: "Contact email is not configured yet." },
      { status: 500 },
    );
  }

  const submittedAt = new Date().toISOString();
  const emailValues: NormalizedContact = values;
  const safeSubject = (values.subject || "Website enquiry").replace(/[\r\n]+/g, " ").slice(0, 140);
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: values.email,
    subject: `[MAMAKQUANT Contact] ${safeSubject}`,
    text: buildEmailText(emailValues, submittedAt),
    html: buildEmailHtml(emailValues, submittedAt),
  });

  if (error) {
    console.error("MAMAKQUANT contact form email failed.", error);
    return NextResponse.json(
      { ok: false, error: "Message could not be sent. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
