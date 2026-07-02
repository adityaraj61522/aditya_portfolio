"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";
import { EASE } from "@/lib/motion";

/** Parse "40%" / "80+" / "4+" into number + prefix/suffix for count-up. */
function splitValue(value: string) {
  const match = value.match(/(\d+)/);
  const num = match ? parseInt(match[1], 10) : 0;
  const [prefix, suffix] = value.split(/\d+/);
  return { num, prefix: prefix ?? "", suffix: suffix ?? "" };
}

function StatCounter({ value }: { value: string }) {
  const { num, prefix, suffix } = splitValue(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(num);
      return;
    }
    const controls = animate(0, num, {
      duration: 1.4,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, num, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="section py-16 sm:py-20">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card flex flex-col items-center justify-center rounded-2xl px-4 py-8 text-center"
          >
            <div className="text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
              <StatCounter value={s.value} />
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-wider text-white/50 sm:text-sm">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
