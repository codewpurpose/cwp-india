"use client";

import { useState } from "react";
import { CONTACT_REASONS } from "@/lib/data";

const inputClass =
  "w-full rounded-lg border border-[var(--home-hairline-strong)] bg-[var(--home-white)] px-3.5 py-2.5 text-sm text-[var(--home-ink)] placeholder:text-[var(--home-ink-quiet)] focus:border-[var(--home-fern)] focus:outline-none focus:ring-2 focus:ring-[var(--home-fern)]/30";

const labelClass =
  "mb-1.5 block text-sm font-medium text-[var(--home-ink-soft)]";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    data.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""
    );
    data.append("subject", `[CWP India] ${data.get("reason")} — ${data.get("name")}`);
    data.append("from_name", "CWP India Contact Form");

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-start justify-center gap-3">
        <h2 className="home-serif text-xl">Message sent!</h2>
        <p className="text-sm leading-[1.6] text-[var(--home-ink-soft)]">
          Thanks for reaching out — we&apos;ll get back to you soon. In a hurry?
          Email us directly at{" "}
          <a
            href="mailto:team@codewithpurpose.org"
            className="text-[var(--home-link-green)] underline underline-offset-2"
          >
            team@codewithpurpose.org
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="home-arrow-link mt-2 self-start"
        >
          Send another message <span className="home-arrow">→</span>
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Name</span>
          <input
            type="text"
            name="name"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className={labelClass}>Email</span>
          <input
            type="email"
            name="email"
            required
            className={inputClass}
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="block">
        <span className={labelClass}>City / State</span>
        <input
          type="text"
          name="location"
          className={inputClass}
          placeholder="e.g. Bengaluru, Karnataka"
        />
      </label>
      <label className="block">
        <span className={labelClass}>Reason</span>
        <select name="reason" className={inputClass}>
          {CONTACT_REASONS.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className={labelClass}>Message</span>
        <textarea
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-none`}
          placeholder="Tell us what you have in mind..."
        />
      </label>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong — please try again or email us directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="home-btn home-btn-fill w-full disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
        <span className="home-arrow">→</span>
      </button>
    </form>
  );
}
