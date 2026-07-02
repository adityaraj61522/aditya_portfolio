"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, ArrowUpRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "@/lib/data";
import { EASE } from "@/lib/motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const orbitChips = ["LangChain", "FastAPI", "RAG", "Next.js", "GCP", "MCP"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-28 pb-16"
    >
      <div className="section grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ---------------- Left: copy ---------------- */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-white/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to new opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
            <span className="mt-3 block text-2xl font-semibold text-white/80 sm:text-3xl lg:text-4xl">
              I build AI-powered, cloud-native systems.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            {profile.tagline} 4+ years turning Generative AI, RAG, and
            microservices into products used by 80+ enterprise organizations.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={profile.resumeUrl}
              download
              className="sheen inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-1 to-accent-2 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-500/25 transition hover:shadow-indigo-500/45"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white/90 transition hover:border-white/30 hover:bg-white/[0.06]"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex items-center gap-3">
            <SocialLink href={profile.github} label="GitHub">
              <FiGithub className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={profile.linkedin} label="LinkedIn">
              <FiLinkedin className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={`mailto:${profile.email}`} label="Email">
              <Mail className="h-5 w-5" />
            </SocialLink>
            <span className="ml-1 text-sm text-white/40">{profile.location}</span>
          </motion.div>
        </motion.div>

        {/* ---------------- Right: glossy profile card ---------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
        >
          {/* soft glow */}
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent-1/30 via-accent-2/20 to-accent-3/20 blur-3xl" />

          <div className="card relative flex h-full flex-col items-center justify-center gap-6 rounded-[2rem] p-8">
            {/* Rotating dashed ring + photo */}
            <div className="relative grid place-items-center">
              <motion.div
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                className="absolute h-56 w-56 rounded-full border border-dashed border-white/15"
              />
              <div className="float-slow relative rounded-full bg-gradient-to-br from-accent-1 via-accent-2 to-accent-3 p-[3px] shadow-2xl shadow-indigo-500/40">
                <div className="relative h-44 w-44 overflow-hidden rounded-full bg-[#0a0b12]">
                  <Image
                    src="/profile.jpg"
                    alt={profile.name}
                    fill
                    sizes="176px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-accent-2/25 to-transparent" />
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-3">
                {profile.role.split(" ").slice(0, 2).join(" ")}
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                SDE-2 @ PeopleStrong
              </p>
            </div>

            {/* Floating tech chips */}
            <div className="flex flex-wrap justify-center gap-2">
              {orbitChips.map((chip, i) => (
                <motion.span
                  key={chip}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-white/70"
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 sm:flex">
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="flex h-9 w-5 justify-center rounded-full border border-white/20 pt-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-white/60"
          />
        </div>
      </div>
    </section>
  );
}

function SocialLink({
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
      className="group grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
    >
      {children}
    </a>
  );
}
