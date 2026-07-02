"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        subtitle="Selected products spanning applied AI, healthcare, and developer tooling."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
            className="card group flex flex-col rounded-2xl p-7"
          >
            {/* header bar with project-specific gradient */}
            <div className="mb-5 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${project.accent} text-lg font-bold text-white shadow-lg`}
                >
                  {project.name.charAt(0)}
                </span>
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              </div>
              <ArrowUpRight className="h-5 w-5 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-3" />
            </div>

            <p className="flex-1 text-sm leading-relaxed text-white/65">
              {project.blurb}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-white/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white/70 transition hover:text-white"
                >
                  <FiGithub className="h-4 w-4" />
                  Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-accent-3 transition hover:text-accent-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
