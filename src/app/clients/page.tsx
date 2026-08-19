import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { clients, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Clients — Linestory Studio",
  description:
    "The developers, hospitality groups and families Linestory Studio builds with.",
};

export default function ClientsPage() {
  return (
    <main>
      <PageHeader
        label="Partners"
        title="Clients"
        intro="We build long relationships — with families, developers, hospitality groups and public bodies who trust us to draw their next chapter."
      />

      {/* Logo wall */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((c) => (
            <div
              key={c}
              data-cursor
              className="flex min-h-28 items-center justify-center bg-cream px-6 text-center transition-colors duration-500 hover:bg-cream-deep/60"
            >
              <span className="font-display text-lg font-light text-ink-soft md:text-xl">
                {c}
              </span>
            </div>
          ))}
        </RevealGroup>
      </section>

      {/* Testimonials grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-ink-soft">
            What they say
          </span>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-md border border-ink/10 p-8 md:p-10"
            >
              <span className="font-display text-4xl leading-none text-gold">
                “
              </span>
              <blockquote className="mt-2 font-display text-xl font-light leading-[1.4] text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-medium text-ink">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </RevealGroup>
      </section>
    </main>
  );
}
