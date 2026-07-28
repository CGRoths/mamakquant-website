"use client";

import { type FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  website: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
  website: "",
};

const subjectOptions = [
  "Infrastructure",
  "Research collaboration",
  "Institutional enquiries",
  "Data and API",
  "Technology partnership",
  "General enquiry",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "submitting") {
      setStatus("idle");
      setStatusMessage("");
    }
  }

  function validate() {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!values.name.trim()) nextErrors.name = "Name is required.";
    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!values.message.trim()) {
      nextErrors.message = "Message is required.";
    } else if (values.message.trim().length < 10) {
      nextErrors.message = "Message must be at least 10 characters.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setStatusMessage("Please check the highlighted fields.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string; fieldErrors?: Partial<Record<keyof FormValues, string>> }
        | null;

      if (!response.ok || !result?.ok) {
        setErrors((current) => ({ ...current, ...result?.fieldErrors }));
        setStatus("error");
        setStatusMessage(result?.error || "Message could not be sent. Please try again shortly.");
        return;
      }

      setStatus("success");
      setStatusMessage("Message sent. We will review your enquiry and respond by email.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please try again shortly.");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={isSubmitting}
      className="form-shell"
    >
      <input
        type="text"
        name="website"
        value={values.website}
        onChange={(event) => updateField("website", event.target.value)}
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
        aria-hidden="true"
      />

      <div className="form-grid">
        <Field label="Name" error={errors.name}>
          <input
            required
            name="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            autoComplete="name"
            className="form-field"
            placeholder="Your name"
          />
        </Field>

        <Field label="Email" error={errors.email}>
          <input
            required
            type="email"
            name="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            autoComplete="email"
            className="form-field"
            placeholder="you@company.com"
          />
        </Field>

        <Field label="Company / Organization" error={errors.company}>
          <input
            name="company"
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
            autoComplete="organization"
            className="form-field"
            placeholder="Company name"
          />
        </Field>

        <Field label="Subject" error={errors.subject}>
          <select
            name="subject"
            value={values.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            className="form-field"
          >
            <option value="">Select enquiry type</option>
            {subjectOptions.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Message" error={errors.message} className="form-span">
          <textarea
            required
            name="message"
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="form-field min-h-36 resize-y"
            placeholder="Tell us what you would like to discuss."
          />
        </Field>
      </div>

      <div aria-live="polite" aria-atomic="true">
        {statusMessage ? (
          <div
            className={`form-status ${
              status === "success"
                ? "form-status--success"
                : "form-status--error"
            }`}
          >
            {statusMessage}
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="button button--primary"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      <p style={{ color: "var(--dim)", fontSize: "0.72rem", lineHeight: 1.6, marginTop: "1rem" }}>
        Enquiries are routed securely through the MAMAKQUANT website backend.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className = "",
}: Readonly<{
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <label className={`block ${className}`}>
      <span className="field-label">{label}</span>
      {children}
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  );
}
