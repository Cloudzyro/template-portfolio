"use client";

import { useState } from "react";

const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

export function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "unset">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!endpoint) {
      setStatus("unset");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-accent";

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
        </label>
      </div>
      <label className="block text-sm font-medium">
        What are you working on?
        <textarea name="message" required rows={5} className={field} placeholder="The project, timeline and team" />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-paper transition-[background-color,transform] duration-150 hover:bg-ink/85 active:scale-[0.98] disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        <p role="status" aria-live="polite" className="text-sm text-muted">
          {status === "sent" && "Thanks. Your message is on its way, and I'll reply within two working days."}
          {status === "error" && (
            <>
              That didn&apos;t go through. Please email{" "}
              <a className="text-accent underline underline-offset-2" href={`mailto:${email}`}>{email}</a> instead.
            </>
          )}
          {status === "unset" && (
            <>
              This form isn&apos;t connected yet. Email{" "}
              <a className="text-accent underline underline-offset-2" href={`mailto:${email}`}>{email}</a> and I&apos;ll get back to you.
            </>
          )}
        </p>
      </div>
    </form>
  );
}
