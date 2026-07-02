import { ArrowUp, Download, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { navLinks, profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-white/[0.015]">
      <div className="section py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-1 to-accent-2 font-bold text-white">
                AR
              </span>
              <span className="font-semibold text-white">{profile.name}</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              {profile.role} building AI-powered, cloud-native systems. Always up
              for a good engineering problem.
            </p>
            <div className="mt-5 flex gap-3">
              <FooterSocial href={profile.github} label="GitHub">
                <FiGithub className="h-[18px] w-[18px]" />
              </FooterSocial>
              <FooterSocial href={profile.linkedin} label="LinkedIn">
                <FiLinkedin className="h-[18px] w-[18px]" />
              </FooterSocial>
              <FooterSocial href={`mailto:${profile.email}`} label="Email">
                <Mail className="h-[18px] w-[18px]" />
              </FooterSocial>
            </div>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
              <p className="mb-4 text-sm font-semibold text-white/80">Navigate</p>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold text-white/80">Get in touch</p>
              <ul className="space-y-2.5">
                <li>
                  <a href={`mailto:${profile.email}`} className="text-sm text-white/50 transition hover:text-white">
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a href={profile.resumeUrl} download className="inline-flex items-center gap-1.5 text-sm text-accent-3 transition hover:text-accent-2">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs text-white/50 transition hover:text-white"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterSocial({
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
      className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-white/25 hover:text-white"
    >
      {children}
    </a>
  );
}
