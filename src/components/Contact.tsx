"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send, AlertCircle } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { profile, WEB3FORMS_ACCESS_KEY } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Honeypot: bots fill hidden fields
    if (data.botcheck) return;

    if (WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setStatus("error");
      setErrorMsg(
        "The contact form isn't configured yet. Add your Web3Forms access key in src/lib/data.ts."
      );
      return;
    }

    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio message from ${data.name}`,
          from_name: "Portfolio Contact Form",
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or email me directly.");
    }
  }

  return (
    <section id="contact" className="section scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        subtitle="Have a role, a project, or an idea? Send a message — it lands straight in my inbox."
      />

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left: contact details */}
        <Reveal className="flex flex-col gap-4">
          <ContactCard icon={<Mail className="h-5 w-5" />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactCard icon={<Phone className="h-5 w-5" />} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
          <ContactCard icon={<MapPin className="h-5 w-5" />} label="Location" value={profile.location} />

          <div className="card rounded-2xl p-6">
            <p className="mb-4 text-sm text-white/60">Find me online</p>
            <div className="flex gap-3">
              <SocialButton href={profile.github} label="GitHub">
                <FiGithub className="h-5 w-5" />
              </SocialButton>
              <SocialButton href={profile.linkedin} label="LinkedIn">
                <FiLinkedin className="h-5 w-5" />
              </SocialButton>
              <SocialButton href={`mailto:${profile.email}`} label="Email">
                <Mail className="h-5 w-5" />
              </SocialButton>
            </div>
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="card rounded-2xl p-7 sm:p-8">
            {/* honeypot */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name">
                <input
                  name="name"
                  required
                  placeholder="Jane Recruiter"
                  className="input"
                />
              </Field>
              <Field label="Email">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="input"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Message">
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the role or project…"
                  className="input resize-none"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="sheen mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-1 to-accent-2 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-500/25 transition hover:shadow-indigo-500/45 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                <CheckCircle2 className="h-4 w-4" />
                Thanks! Your message has been sent — I&apos;ll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 flex items-center gap-2 rounded-lg border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                {errorMsg}
              </p>
            )}
          </form>
        </Reveal>
      </div>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          color: #e8ecf6;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        :global(.input::placeholder) {
          color: rgba(255, 255, 255, 0.3);
        }
        :global(.input:focus) {
          border-color: rgba(99, 102, 241, 0.6);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-white/70">{label}</span>
      {children}
    </label>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="card flex items-center gap-4 rounded-2xl p-5">
      <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-1/80 to-accent-2/80 text-white">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-white/45">{label}</p>
        <p className="truncate text-sm font-medium text-white/85">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
    >
      {children}
    </a>
  );
}
