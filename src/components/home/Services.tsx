import { services } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import { RevealGroup } from "@/components/Reveal";

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:py-36">
      <SectionHeading index="02" title="What we do" />
      <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-md bg-ink/10 md:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={s.title}
            data-cursor
            className="group bg-cream p-8 transition-colors duration-500 hover:bg-turq-deep md:p-10"
          >
            <span className="font-display text-sm text-gold-deep">
              0{i + 1}
            </span>
            <h3 className="mt-6 font-display text-2xl font-light text-ink transition-colors duration-500 group-hover:text-cream md:text-3xl">
              {s.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-cream/80">
              {s.body}
            </p>
          </div>
        ))}
      </RevealGroup>
    </section>
  );
}
