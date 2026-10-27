"use client";
 
import { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
 
// 1) Hae ilmainen avain osoitteesta web3forms.com (syötä sähköposti, avain tulee postiin)
// 2) Liitä avain tähän lainausmerkkien sisään.
// Ennen avainta lomake avaa sähköpostiohjelman valmiiksi täytetyllä viestillä.
const WEB3FORMS_KEY = "";
const CONTACT_EMAIL = "auraboxoy@gmail.com";
 
const TYPES = ["Event", "Venue", "Hotel", "Other"] as const;
 
type Status = "idle" | "sending" | "sent" | "error";
 
const inputClass =
  "w-full border-b border-hairline bg-transparent py-4 font-sans text-base text-ivory placeholder:text-mist/70 transition-colors duration-300 focus:border-gold focus:outline-none";
 
export function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>({ amount: 0.3 });
  const [type, setType] = useState<(typeof TYPES)[number]>("Event");
  const [status, setStatus] = useState<Status>("idle");
 
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
 
    // Roskapostisuoja: botit täyttävät piilokentän
    if (data.get("botcheck")) return;
 
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
 
    if (!WEB3FORMS_KEY) {
      const body = `Name: ${name}\nCompany / event: ${company}\nType: ${type}\nEmail: ${email}\n\n${message}`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        `Aurabox partnership – ${company || name}`,
      )}&body=${encodeURIComponent(body)}`;
      return;
    }
 
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Aurabox partnership – ${company || name}`,
          from_name: "aurabox.fi",
          replyto: email,
          name,
          company,
          type,
          email,
          message,
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
    <section
      id="contact"
      className="relative flex w-full flex-col items-center justify-center bg-black px-6 py-32"
      aria-label="Contact"
    >
      <div
        ref={ref}
        className={cn("reveal flex w-full max-w-2xl flex-col items-center", inView && "in-view")}
      >
        <Eyebrow>Contact</Eyebrow>
        <h2 className="mt-8 max-w-xl text-center font-serif text-4xl font-light leading-tight text-ivory md:text-5xl">
          Let&rsquo;s bring Aurabox to your space.
        </h2>
        <p className="mt-6 max-w-md text-center font-serif text-lg italic text-mist">
          Events, venues, hotels. Tell us about yours.
        </p>
 
        {status === "sent" ? (
          <div className="mt-16 flex flex-col items-center gap-4 text-center" role="status">
            <span className="font-serif text-3xl font-light text-gold">Thank you.</span>
            <p className="font-serif text-lg italic text-mist">
              We&rsquo;ll be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-14 flex w-full flex-col gap-2" noValidate={false}>
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
 
            <fieldset className="mb-6 flex flex-col items-center gap-4">
              <legend className="font-label mb-4 w-full text-center text-[10px] uppercase tracking-[0.35em] text-mist">
                What are you looking for?
              </legend>
              <div className="flex flex-wrap justify-center gap-3">
                {TYPES.map((t) => (
                  <label
                    key={t}
                    className={cn(
                      "font-label flex min-h-11 cursor-pointer items-center border px-5 text-[10px] uppercase tracking-[0.3em] transition-all duration-300",
                      type === t
                        ? "border-gold bg-gold text-black"
                        : "border-gold/40 text-ivory hover:border-gold",
                    )}
                  >
                    <input
                      type="radio"
                      name="type"
                      value={t}
                      checked={type === t}
                      onChange={() => setType(t)}
                      className="sr-only"
                    />
                    {t}
                  </label>
                ))}
              </div>
            </fieldset>
 
            <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
              <label className="block">
                <span className="sr-only">Name</span>
                <input name="name" type="text" required placeholder="Name" autoComplete="name" className={inputClass} />
              </label>
              <label className="block">
                <span className="sr-only">Company or event</span>
                <input
                  name="company"
                  type="text"
                  required
                  placeholder="Company / event"
                  autoComplete="organization"
                  className={inputClass}
                />
              </label>
            </div>
            <label className="block">
              <span className="sr-only">Email</span>
              <input name="email" type="email" required placeholder="Email" autoComplete="email" className={inputClass} />
            </label>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us about your space, date or audience (optional)"
                className={cn(inputClass, "resize-none")}
              />
            </label>
 
            <div className="mt-10 flex flex-col items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="font-label group inline-flex min-h-14 items-center gap-3 bg-gold px-12 text-[11px] font-medium uppercase tracking-[0.35em] text-black transition-all duration-500 hover:bg-ivory disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send enquiry"}
                <span
                  aria-hidden
                  className="inline-block h-px w-5 origin-left bg-current transition-transform duration-500 group-hover:scale-x-150"
                />
              </button>
              {status === "error" && (
                <p className="font-serif text-base italic text-gold" role="alert">
                  Something went wrong. Please email us directly.
                </p>
              )}
            </div>
          </form>
        )}
 
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-14 font-serif text-lg italic text-mist transition-colors duration-300 hover:text-gold"
        >
          or write to {CONTACT_EMAIL}
        </a>
        <p className="font-label mt-4 text-[10px] uppercase tracking-[0.4em] text-mist/70">
          Tampere, Finland
        </p>
      </div>
    </section>
  );
}
