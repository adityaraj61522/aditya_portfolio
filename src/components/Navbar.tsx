"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#05060b]/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="section flex h-[70px] items-center justify-between">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-1 to-accent-2 font-bold text-white shadow-lg shadow-indigo-500/30">
            AR
          </span>
          <span className="text-sm font-semibold tracking-wide text-white/90 transition group-hover:text-white">
            {profile.name}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="sheen ml-3 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-1 to-accent-2 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-indigo-500/40"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-white/80 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#05060b]/95 backdrop-blur-xl md:hidden">
          <div className="section flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              download
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-1 to-accent-2 px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
