import { Reveal } from "./Reveal";

export default function SectionHeading({
  index,
  title,
  intro,
  align = "left",
}: {
  index: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`flex flex-col ${
        align === "center" ? "items-center text-center" : ""
      }`}
    >
      <div className="flex items-baseline gap-3">
        <span className="font-display text-sm text-gold-deep">{index}</span>
        <span className="text-xs font-medium uppercase tracking-[0.4em] text-ink-soft">
          {title}
        </span>
      </div>
      {intro && (
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-light leading-[1.15] text-ink md:text-5xl">
          {intro}
        </h2>
      )}
    </Reveal>
  );
}
