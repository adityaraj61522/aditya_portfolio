import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've made impact"
        subtitle="Production systems and AI agents serving 80+ enterprise organizations."
      />

      <div className="relative mx-auto max-w-3xl">
        {/* vertical spine */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-1 via-accent-2/50 to-transparent sm:left-[23px]" />

        {experience.map((job, i) => (
          <Reveal key={job.company + i} delay={i * 0.1} className="relative mb-10 pl-14 sm:pl-16">
            {/* node */}
            <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-[#0a0b12] text-accent-3 shadow-lg shadow-indigo-500/20 sm:h-12 sm:w-12">
              <Briefcase className="h-5 w-5" />
            </span>

            <div className="card rounded-2xl p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {job.role}
                </h3>
                <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-accent-3">
                  {job.period}
                </span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/60">
                <span className="font-medium text-white/80">{job.company}</span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {job.location}
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {job.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-white/65">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-accent-3 to-accent-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
