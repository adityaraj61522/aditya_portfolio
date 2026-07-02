import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent-3 to-accent-2" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-white/55">{subtitle}</p>
      )}
    </Reveal>
  );
}
