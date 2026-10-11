import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject, projectSlugs } from "@/data/projects";
import { projectPhotos } from "@/lib/images";
import { site } from "@/data/site";
import Media from "@/components/Media";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return projectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  return {
    title: p ? `${p.title} — Linestory Studio` : "Project — Linestory Studio",
    description: p?.summary,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const idx = projects.findIndex((x) => x.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  const specs = [
    { k: "Location", v: p.location },
    { k: "Year", v: p.year && String(p.year) },
    { k: "Status", v: p.status },
    { k: "Discipline", v: p.discipline },
    { k: "Area", v: p.area },
    { k: "Client", v: p.client },
  ].filter((s) => s.v);

  // [hero, ...gallery] — real photos if provided, else architecture placeholders.
  const photos = projectPhotos(p.slug, p.images, 4);
  const hero = photos[0];
  const gallery = photos.slice(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.title,
    description: p.summary,
    dateCreated: p.year && String(p.year),
    locationCreated: p.location && { "@type": "Place", name: p.location },
    creator: { "@type": "Organization", name: site.name, url: site.url },
    url: `${site.url}/work/${p.slug}`,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero image */}
      <div className="relative h-[70svh] w-full overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Media src={hero} alt={p.title} label={p.title} index={idx} priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-6 pb-12">
          <div className="mx-auto max-w-7xl">
            <span className="text-xs uppercase tracking-[0.3em] text-cream/80">
              {[p.discipline, p.location].filter(Boolean).join(" · ")}
            </span>
            <h1 className="mt-3 font-display text-5xl font-light text-cream md:text-8xl">
              {p.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Intro + specs */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <p className="font-display text-2xl font-light leading-[1.35] text-ink md:text-3xl">
              {p.summary}
            </p>
            <div className="mt-8 space-y-5">
              {p.description.map((para, i) => (
                <p key={i} className="max-w-xl leading-relaxed text-ink-soft">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="rounded-md border border-ink/10 p-8">
              {specs.map((s) => (
                <div
                  key={s.k}
                  className="flex justify-between gap-4 border-b border-ink/10 py-3 last:border-0"
                >
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                    {s.k}
                  </dt>
                  <dd className="text-right text-sm font-medium text-ink">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        {/* Masonry via CSS columns — full photos at their own proportions, no cropping. */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((img, i) => (
            <Reveal key={i} className="mb-4 break-inside-avoid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`${p.title} — view ${i + 1}`}
                loading="lazy"
                className="block h-auto w-full rounded-md"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Next project */}
      <Link
        href={`/work/${next.slug}`}
        data-cursor
        className="group block border-t border-ink/10 py-16 text-center transition-colors hover:bg-cream-deep/40"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-muted">
          Next project
        </span>
        <p className="mt-4 font-display text-4xl font-light text-ink transition-transform duration-500 group-hover:-translate-y-1 md:text-6xl">
          {next.title}
        </p>
        <span className="mt-4 inline-block text-sm text-turq-deep">
          {[next.location, next.year].filter(Boolean).join(" · ")}
        </span>
      </Link>
    </main>
  );
}
