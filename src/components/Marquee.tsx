import { skillTicker } from "@/lib/data";

/** Infinite horizontal ticker of core technologies. */
export default function Marquee() {
  const items = [...skillTicker, ...skillTicker];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.015] py-5">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#05060b] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#05060b] to-transparent" />
      <div className="marquee-fade">
        <div className="marquee-track gap-3">
          {items.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="flex items-center gap-3 whitespace-nowrap px-2 font-mono text-sm text-white/45"
            >
              {skill}
              <span className="text-accent-2/60">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
