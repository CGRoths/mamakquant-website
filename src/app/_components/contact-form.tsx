"use client";

import { type FormEvent, useState } from "react";

const interestTypes = [
  "Partnership",
  "Exchange / Brokerage",
  "Investor Discussion",
  "Data Infrastructure",
  "Strategy / Research",
  "General Inquiry",
];

type FormValues = {
  name: string;
  email: string;
  company: string;
  role: string;
  interestType: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  role: "",
  interestType: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  }

  function validate() {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!values.name.trim()) nextErrors.name = "Name is required.";
    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!values.company.trim()) nextErrors.company = "Company or organization is required.";
    if (!values.role.trim()) nextErrors.role = "Role is required.";
    if (!values.interestType) nextErrors.interestType = "Select an interest type.";
    if (!values.message.trim()) nextErrors.message = "Message is required.";

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // Future integration: POST this payload to Formspree, Resend, EmailJS, or a Vercel serverless API route here.
    setSubmitted(true);
    setValues(initialValues);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-[0_24px_90px_rgba(8,47,73,0.28)] backdrop-blur-xl sm:p-6"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            required
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
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            autoComplete="email"
            className="form-field"
            placeholder="you@company.com"
          />
        </Field>

        <Field label="Company / Organization" error={errors.company}>
          <input
            required
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
            autoComplete="organization"
            className="form-field"
            placeholder="Company name"
          />
        </Field>

        <Field label="Role" error={errors.role}>
          <input
            required
            value={values.role}
            onChange={(event) => updateField("role", event.target.value)}
            autoComplete="organization-title"
            className="form-field"
            placeholder="Founder, partner, investor..."
          />
        </Field>

        <Field label="Interest Type" error={errors.interestType} className="md:col-span-2">
          <select
            required
            value={values.interestType}
            onChange={(event) => updateField("interestType", event.target.value)}
            className="form-field"
          >
            <option value="">Select interest type</option>
            {interestTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Message" error={errors.message} className="md:col-span-2">
          <textarea
            required
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="form-field min-h-36 resize-y"
            placeholder="Tell us what you would like to discuss."
          />
        </Field>
      </div>

      {submitted ? (
        <div className="mt-5 rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
          Message captured locally. The form is ready for a future email or serverless integration.
        </div>
      ) : null}

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 md:w-auto"
      >
        Send Message
      </button>
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
      <span className="mb-2 block text-sm font-medium text-slate-200">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-xs text-rose-200">{error}</span> : null}
    </label>
  );
}
