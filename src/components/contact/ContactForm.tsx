"use client";

import { useState } from "react";

/**
 * No backend needed — posts to Formspree (or any form endpoint).
 * Replace FORM_ENDPOINT with your own: https://formspree.io/f/xxxxxxx
 */
const FORM_ENDPOINT = "/api/contact/"; // trailing slash: avoids a redirect (trailingSlash: true) // Hostinger SMTP, see app/api/contact

type State = "idle" | "sending" | "done" | "error";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("bad response");
      form.reset();
      setState("done");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="flex min-h-64 flex-col items-center justify-center rounded-md border border-turq/30 bg-turq/5 p-10 text-center">
        <p className="font-display text-3xl font-light text-turq-deep">
          Thank you.
        </p>
        <p className="mt-3 text-ink-soft">
          Your message is on its way — we&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* honeypot — hidden from people, bots fill it */}
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <Field label="Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Project location" name="location" />
      <div>
        <label className="text-xs uppercase tracking-[0.2em] text-muted">
          Tell us about your project
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-none border-b border-ink/20 bg-transparent py-2 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-turq-deep"
          placeholder="Site, brief, timeline, a feeling…"
        />
      </div>

      <button
        type="submit"
        disabled={state === "sending"}
        data-cursor
        className="group inline-flex items-center gap-4 rounded-full bg-ink px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-cream transition-colors hover:bg-turq-deep disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Send message"}
        <span className="h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />
      </button>

      {state === "error" && (
        <p className="text-sm text-gold-deep">
          Something went wrong. Email us directly and we&apos;ll pick it up.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 text-ink outline-none transition-colors focus:border-turq-deep"
      />
    </div>
  );
}
