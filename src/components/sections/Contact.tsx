"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { useLang } from "@/i18n/LanguageContext";

// Web3Forms access key (public by design). Without a key the form opens the mail app instead.
const WEB3FORMS_KEY = "e0167ac3-be47-4351-bf4e-020aded19142";
const CONTACT_EMAIL = "auraboxoy@gmail.com";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return;

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const venue = String(data.get("venue") || "");
    const dates = String(data.get("dates") || "");
    const subject = `Aurabox partnership – ${venue || name}`;

    if (!WEB3FORMS_KEY) {
      const body = `Name: ${name}\nEmail: ${email}\nVenue or event: ${venue}\n\nDates and crowd:\n${dates}`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: "aurabox.fi",
          replyto: email,
          name,
          email,
          venue,
          dates,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-[1100px] px-6 py-[150px]" aria-label={c.label}>
      <div className="ab-split grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start gap-[72px]">
        <div className="flex flex-col gap-6">
          <Reveal className="ab-label">{c.label}</Reveal>
          <Reveal as="h2" className="ab-h2">
            {c.title1} <em>{c.title2}</em>
          </Reveal>
          <Reveal as="p" className="ab-lead">{c.body}</Reveal>
          <Reveal className="mt-2 flex gap-3">
            <a href={`mailto:${CONTACT_EMAIL}`} className="ab-icon-btn" aria-label={c.emailLabel} title={CONTACT_EMAIL}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </a>
            <a href="https://www.instagram.com/aurabox.eu" target="_blank" rel="noreferrer" className="ab-icon-btn" aria-label={c.igLabel} title="@aurabox.eu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>
          </Reveal>
        </div>

        {status === "sent" ? (
          <div className="flex flex-col gap-3 pt-14" role="status">
            <div className="font-serif text-[44px] font-light text-gold">{c.thanks}</div>
            <div className="ab-lead">{c.thanks2}</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            <label>
              <span className="sr-only">{c.name}</span>
              <input className="ab-field" name="name" type="text" placeholder={c.name} autoComplete="name" required />
            </label>
            <label>
              <span className="sr-only">{c.email}</span>
              <input className="ab-field" name="email" type="email" placeholder={c.email} autoComplete="email" required />
            </label>
            <label>
              <span className="sr-only">{c.venue}</span>
              <input className="ab-field" name="venue" type="text" placeholder={c.venue} autoComplete="organization" required />
            </label>
            <label>
              <span className="sr-only">{c.dates}</span>
              <textarea className="ab-field resize-none" name="dates" rows={3} placeholder={c.datesPlaceholder} />
            </label>
            <button type="submit" className="ab-btn-s mt-8 self-start" disabled={status === "sending"}>
              {status === "sending" ? c.sending : c.send} <span className="ab-dash" aria-hidden />
            </button>
            {status === "error" && (
              <p className="mt-3 font-serif italic text-gold" role="alert">
                {c.error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
