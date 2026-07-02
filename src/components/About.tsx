import { CheckCircle2, GraduationCap, MapPin } from "lucide-react";
import { about, education, profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="About"
        title="Engineering with intent"
        subtitle="Backend depth, AI fluency, and full-stack range — shipped to real users at enterprise scale."
      />

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        {/* Narrative + highlights */}
        <Reveal className="card rounded-2xl p-8 sm:p-10">
          <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {about.highlights.map((h) => (
              <div key={h} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-3" />
                <span className="text-sm leading-relaxed text-white/70">{h}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Side cards */}
        <div className="flex flex-col gap-6">
          <Reveal delay={0.1} className="card rounded-2xl p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-1 to-accent-2 text-white">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <p className="font-semibold text-white">{education.school}</p>
            <p className="mt-1 text-sm text-white/60">{education.degree}</p>
            <div className="mt-3 flex items-center justify-between text-sm text-white/45">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {education.location}
              </span>
              <span className="font-mono">{education.period}</span>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="card flex flex-col justify-between rounded-2xl bg-gradient-to-br from-accent-1/10 to-accent-2/5 p-8">
            <div>
              <h3 className="text-lg font-semibold">Currently</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Building production Generative-AI agents (RAG, MCP, LangGraph) and
                revamping performance & leave modules at scale.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
              <MapPin className="h-4 w-4 text-accent-3" />
              {profile.location}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
