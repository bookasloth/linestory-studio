"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "@/components/Logo";
import Media from "@/components/Media";
import { nav, site } from "@/data/site";
import { projects } from "@/data/projects";
import { projectPhotos } from "@/lib/images";

gsap.registerPlugin(useGSAP);

// Sidebar + square thumbnail grid, modelled on a classic studio index page.
const filters = ["All", "Completed", "Ongoing", "Interior"] as const;
type Filter = (typeof filters)[number];

const matches = (f: Filter, p: (typeof projects)[number]) =>
  f === "All" || p.status === f || p.discipline === f;

const label = (f: Filter) => (f === "Interior" ? "Interior Design" : f);

export default function HomeWorks() {
  const [filter, setFilter] = useState<Filter>("All");
  const grid = useRef<HTMLDivElement>(null);
  const shown = projects.filter((p) => matches(filter, p));

  // Restore filter from ?filter= so filtered views are shareable and survive
  // navigating back from a project page.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("filter");
    const f = filters.find((x) => x.toLowerCase() === q);
    if (f) setFilter(f);
  }, []);

  const choose = (f: Filter) => {
    setFilter(f);
    const url = f === "All" ? "/" : `/?filter=${f.toLowerCase()}`;
    window.history.replaceState(null, "", url);
  };

  // Staggered fade-in on load and whenever the filter changes.
  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".tile",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.06, ease: "expo.out" }
        );
      });
    },
    { dependencies: [filter], scope: grid }
  );

  return (
    <div className="mx-auto flex max-w-[1320px] flex-col gap-12 px-6 py-12 md:flex-row md:gap-11 md:px-[60px] md:py-[60px]">
      <aside className="shrink-0 text-center md:sticky md:top-[60px] md:w-[280px] md:self-start md:text-left">
        <div className="flex justify-center md:justify-start">
          <Logo />
        </div>
        <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-muted">
          Architecture · Interior Design
        </p>

        <nav className="mt-14 flex flex-wrap justify-center gap-x-4 md:flex-col md:items-start">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-1.5 text-sm text-ink transition-colors hover:text-turq-deep"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="mt-14 text-[11px] uppercase tracking-[0.2em] text-muted">
          Works filter
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-x-4 md:flex-col md:items-start">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => choose(f)}
              aria-pressed={filter === f}
              className={`py-1.5 text-sm transition-colors ${
                filter === f ? "text-turq-deep" : "text-ink hover:text-turq-deep"
              }`}
            >
              {label(f)}
            </button>
          ))}
        </div>

        <div className="mt-14 space-y-1 text-xs text-muted">
          <a href={`mailto:${site.email}`} className="block hover:text-ink">
            {site.email}
          </a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block hover:text-ink">
            {site.phone}
          </a>
          <a
            href={site.socials[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-ink"
          >
            {site.socials[0].label}
          </a>
        </div>
      </aside>

      <div
        ref={grid}
        className="grid flex-1 grid-cols-1 content-start gap-[25px] sm:grid-cols-2 lg:grid-cols-3"
      >
        {shown.length === 0 && (
          <p className="col-span-full py-20 text-center text-sm text-muted">
            No {label(filter).toLowerCase()} projects yet.
          </p>
        )}
        {shown.map((p, i) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="tile group relative block aspect-square overflow-hidden bg-cream-deep"
          >
            <Media
              src={projectPhotos(p.slug, p.images, 1)[0]}
              alt={p.title}
              label={p.title}
              index={i}
              priority={i < 3}
              className="transition-transform duration-700 motion-safe:group-hover:scale-105"
            />
            {/* Hover reveal on mouse; always-visible caption on touch screens. */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/55 text-center text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:inset-x-0 [@media(hover:none)]:top-auto [@media(hover:none)]:bg-gradient-to-t [@media(hover:none)]:from-ink/70 [@media(hover:none)]:to-transparent [@media(hover:none)]:py-4 [@media(hover:none)]:opacity-100">
              <h2 className="text-[19px] font-light uppercase tracking-wide">
                {p.title}
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.15em]">
                {[p.location, p.year].filter(Boolean).join(", ") || p.discipline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
