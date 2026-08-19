"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { projects, disciplines } from "@/data/projects";
import { projectPhotos } from "@/lib/images";
import Media from "@/components/Media";

gsap.registerPlugin(useGSAP);

const STATUS = ["All", "Completed", "Ongoing"] as const;

export default function WorkIndex() {
  const [status, setStatus] = useState<string>("All");
  const [disc, setDisc] = useState<string>("All");
  const root = useRef<HTMLDivElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);

  const filtered = projects.filter(
    (p) =>
      (status === "All" || p.status === status) &&
      (disc === "All" || p.discipline === disc)
  );

  // Re-run row entrance whenever the filter changes.
  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) return;
      gsap.from(".work-row", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "expo.out",
        stagger: 0.06,
      });
    },
    { dependencies: [status, disc], scope: root, revertOnUpdate: true }
  );

  // Preview follows the pointer (desktop only).
  useGSAP(
    () => {
      const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
      if (!fine.matches || !preview.current) return;
      // The preview lives in the whitespace between the title and the type
      // columns: X is pinned just left of the "type" column, and only Y
      // tracks the pointer so it glides down the rows. (right edge = anchor)
      gsap.set(preview.current, { xPercent: -100, yPercent: -50 });

      const place = () => {
        const disc = root.current?.querySelector<HTMLElement>("[data-disc]");
        if (disc && preview.current) {
          gsap.set(preview.current, {
            x: disc.getBoundingClientRect().left - 32,
          });
        }
      };
      place(); // fix horizontal position now (and on resize)

      const yTo = gsap.quickTo(preview.current, "y", {
        duration: 0.45,
        ease: "power3",
      });
      const move = (e: PointerEvent) => yTo(e.clientY);

      window.addEventListener("pointermove", move);
      window.addEventListener("resize", place);
      return () => {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("resize", place);
      };
    },
    { scope: root }
  );

  return (
    <div ref={root} className="relative">
      {/* Filters */}
      <div className="flex flex-col gap-6 border-y border-ink/10 py-6 md:flex-row md:items-center md:justify-between">
        <FilterRow
          options={[...STATUS]}
          value={status}
          onChange={setStatus}
        />
        <FilterRow
          options={["All", ...disciplines]}
          value={disc}
          onChange={setDisc}
        />
      </div>

      {/* Index */}
      <ul>
        {filtered.map((p, i) => (
          <li key={p.slug} className="work-row border-b border-ink/10">
            <Link
              href={`/work/${p.slug}`}
              data-cursor
              onPointerEnter={() => setHover(i)}
              onPointerLeave={() => setHover(null)}
              className="group grid grid-cols-[auto_1fr] items-center gap-4 py-6 md:grid-cols-[3rem_1fr_10rem_8rem_5rem] md:gap-6 md:py-8"
            >
              <span className="font-display text-sm text-gold-deep">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* mobile thumb */}
              <span className="flex items-center gap-4 md:contents">
                <span className="relative h-16 w-20 shrink-0 overflow-hidden rounded md:hidden">
                  <Media
                    src={projectPhotos(p.slug, p.images)[0]}
                    alt={p.title}
                    label={p.title}
                    index={i}
                  />
                </span>
                <span className="font-display text-2xl font-light text-ink transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                  {p.title}
                </span>
              </span>

              <span
                data-disc
                className="hidden text-sm uppercase tracking-wider text-muted md:block"
              >
                {p.discipline}
              </span>
              <span className="hidden text-sm text-ink-soft md:block">
                {p.location}
              </span>
              <span className="hidden text-right text-sm text-muted md:block">
                {p.year}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-muted">
          No projects in this filter yet.
        </p>
      )}

      {/* Cursor-following preview (desktop) */}
      <div
        ref={preview}
        className="pointer-events-none fixed left-0 top-0 z-30 hidden md:block"
      >
        <div
          className={`h-56 w-56 overflow-hidden rounded-md shadow-2xl transition-opacity duration-300 ${
            hover !== null ? "opacity-100" : "opacity-0"
          }`}
        >
          {hover !== null && filtered[hover] && (
            <Media
              src={projectPhotos(filtered[hover].slug, filtered[hover].images)[0]}
              alt={filtered[hover].title}
              label={filtered[hover].title}
              index={hover}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function FilterRow({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={`text-sm tracking-wide transition-colors ${
            value === o
              ? "text-ink"
              : "text-muted hover:text-ink-soft"
          }`}
        >
          {o}
          {value === o && (
            <span className="mx-auto mt-0.5 block h-px w-full bg-gold" />
          )}
        </button>
      ))}
    </div>
  );
}
