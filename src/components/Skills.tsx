"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  LayoutDashboard,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  Code2,
  Server,
  LayoutDashboard,
  Database,
  Cloud,
  Sparkles,
};

export default function Skills() {
  return (
    <section id="skills" className="section scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Toolbox"
        title="Skills & technologies"
        subtitle="The stack I reach for across backend, AI, frontend, data, and infrastructure."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon] ?? Sparkles;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="card group rounded-2xl p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-1/80 to-accent-2/80 text-white shadow-lg shadow-indigo-500/20">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-white/70 transition group-hover:border-white/15"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
