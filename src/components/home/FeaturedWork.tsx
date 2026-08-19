import Link from "next/link";
import { projects } from "@/data/projects";
import { projectPhotos } from "@/lib/images";
import Media from "@/components/Media";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export default function FeaturedWork() {
  const featured = projects.slice(0, 4);
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:py-36">
      <SectionHeading
        index="01"
        title="Selected Work"
        intro="Places drawn line by line — a few we're proud of."
      />

      <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08}>
            <Link
              href={`/work/${p.slug}`}
              data-cursor
              className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-cream-deep">
                <div className="h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]">
                  <Media
                    src={projectPhotos(p.slug, p.images)[0]}
                    alt={p.title}
                    label={p.title}
                    index={i}
                  />
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs uppercase tracking-wider text-ink">
                  {p.discipline}
                </span>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl font-light text-ink md:text-3xl">
                  <span className="bg-gradient-to-r from-gold to-gold bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                    {p.title}
                  </span>
                </h3>
                <span className="shrink-0 text-sm text-muted">{p.year}</span>
              </div>
              <p className="mt-1 text-sm text-muted">
                {p.location} · {p.status}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20 flex justify-center">
        <Link
          href="/work"
          data-cursor
          className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-ink"
        >
          View all projects
          <span className="h-px w-10 bg-turq-deep transition-all duration-300 group-hover:w-16" />
        </Link>
      </Reveal>
    </section>
  );
}
