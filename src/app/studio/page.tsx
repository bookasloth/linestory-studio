import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Reveal, RevealGroup } from "@/components/Reveal";
import WeaveMark from "@/components/WeaveMark";
import Media from "@/components/Media";
import { team, awards } from "@/data/site";

export const metadata: Metadata = {
  title: "Studio — Linestory Studio",
  description:
    "Linestory Studio is an architecture and interior practice. Our philosophy, approach and team.",
};

const approach = [
  {
    k: "Listen",
    v: "We start with people and place — how you live, how the light falls, what the site already knows.",
  },
  {
    k: "Draw",
    v: "Ideas are tested as lines: plans, sections and models, made and remade until the story is clear.",
  },
  {
    k: "Refine",
    v: "Every joint, material and edge is detailed. Nothing is left to chance on site.",
  },
  {
    k: "Build",
    v: "We stay close through construction, protecting the idea from brief to handover.",
  },
];

export default function StudioPage() {
  return (
    <main>
      <PageHeader
        label="The Studio"
        title="A practice built on lines."
        intro="Linestory Studio is an architecture and interior design practice working across homes, hospitality and civic projects. We believe good buildings begin as good stories — clearly told, patiently drawn."
      />

      {/* Philosophy */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
        <Reveal className="order-2 md:order-1">
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-turq-deep">
            Philosophy
          </span>
          <p className="mt-6 font-display text-3xl font-light leading-[1.2] text-ink md:text-4xl">
            Two threads — <span className="text-turq-deep">turquoise</span> and{" "}
            <span className="text-gold-deep">gold</span> — crossing over and
            under, again and again.
          </p>
          <p className="mt-6 max-w-lg leading-relaxed text-ink-soft">
            That weave is our name and our method: structure and light, rigour
            and warmth, the measured and the felt. We hold both, and let them
            tighten into place.
          </p>
        </Reveal>
        <Reveal className="order-1 flex justify-center md:order-2">
          <div className="w-64 md:w-96">
            <WeaveMark className="h-auto w-full" />
          </div>
        </Reveal>
      </section>

      {/* Approach */}
      <section className="bg-cream-deep/50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-ink-soft">
              How we work
            </span>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-10 md:grid-cols-4">
            {approach.map((a, i) => (
              <div key={a.k}>
                <span className="font-display text-4xl font-light text-turq/40">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl font-light text-ink">
                  {a.k}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {a.v}
                </p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-ink-soft">
            The team
          </span>
        </Reveal>
        <RevealGroup className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {team.map((m, i) => (
            <a key={m.name} href={m.href} target={m.href && "_blank"} rel="noopener noreferrer" data-cursor className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-md bg-cream-deep">
                <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                  <Media alt={m.name} label={m.name} index={i} />
                </div>
              </div>
              <h3 className="mt-4 font-display text-xl font-light text-ink">
                {m.name}
              </h3>
              <p className="text-sm text-muted">
                {[m.role, m.href && "LinkedIn ↗"].filter(Boolean).join(" · ")}
              </p>
            </a>
          ))}
        </RevealGroup>
      </section>

      {/* Awards */}
      {awards.length > 0 && <section className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-ink-soft">
              Recognition
            </span>
          </Reveal>
          <ul className="mt-10">
            {awards.map((a) => (
              <li key={a.title}>
                <Reveal>
                  <div className="flex items-baseline gap-6 border-b border-ink/10 py-6">
                    <span className="font-display text-lg text-gold-deep">
                      {a.year}
                    </span>
                    <span className="font-display text-xl font-light text-ink md:text-2xl">
                      {a.title}
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>}
    </main>
  );
}
