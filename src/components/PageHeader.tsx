import { Reveal } from "./Reveal";

export default function PageHeader({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="mx-auto max-w-7xl px-6 pb-8 pt-36 md:pt-48">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.4em] text-turq-deep">
          {label}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="mt-6 font-display text-5xl font-light leading-[1.02] text-ink md:text-8xl">
          {title}
        </h1>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {intro}
          </p>
        </Reveal>
      )}
    </header>
  );
}
