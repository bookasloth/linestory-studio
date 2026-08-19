"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WeaveMark from "./WeaveMark";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SWATCHES = [
  { name: "Turquoise Deep", hex: "#146370", cls: "bg-turq-deep", light: false },
  { name: "Turquoise", hex: "#1F97A6", cls: "bg-turq", light: false },
  { name: "Turquoise Bright", hex: "#2CBCCD", cls: "bg-turq-bright", light: false },
  { name: "Gold", hex: "#F2B705", cls: "bg-gold", light: true },
  { name: "Gold Deep", hex: "#D99A04", cls: "bg-gold-deep", light: false },
  { name: "Ink", hex: "#141414", cls: "bg-ink", light: false },
  { name: "Cream", hex: "#F5F2EA", cls: "bg-cream border border-cream-deep", light: true },
];

export default function Specimen() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) return;

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // Swatches deal in like a hand of cards
      gsap.from(".swatch", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
        stagger: 0.07,
        scrollTrigger: { trigger: ".swatch-row", start: "top 85%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative mx-auto max-w-6xl px-6 pb-40 pt-8">
      <SectionLabel index="01" title="Design System" />

      {/* Palette */}
      <div className="mt-12">
        <p className="reveal mb-6 max-w-xl font-display text-2xl font-light text-ink md:text-3xl">
          A near-monochrome canvas, so architecture owns the color —
          turquoise and gold enter only as{" "}
          <span className="italic text-turq-deep">line, accent, and light.</span>
        </p>
        <div className="swatch-row mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {SWATCHES.map((s) => (
            <div key={s.name} className="swatch" data-cursor>
              <div className={`aspect-[4/5] w-full rounded-md ${s.cls}`} />
              <p className="mt-3 text-sm font-medium text-ink">{s.name}</p>
              <p className="text-xs uppercase tracking-wider text-muted">
                {s.hex}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div className="mt-28 grid gap-14 lg:grid-cols-2">
        <div className="reveal">
          <Tag>Display — Fraunces</Tag>
          <p className="mt-6 font-display text-6xl font-light leading-[0.95] text-ink md:text-7xl">
            Aa
          </p>
          <p className="mt-4 font-display text-3xl font-light leading-tight text-ink">
            Built form, drawn line by line.
          </p>
          <p className="mt-2 font-display text-xl font-light italic text-ink-soft">
            Space, light, proportion &amp; craft.
          </p>
        </div>
        <div className="reveal">
          <Tag>Text — Manrope</Tag>
          <p className="mt-6 text-5xl font-semibold tracking-tight text-ink">
            Aa
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            Linestory Studio is an architecture and interior practice working
            across residential, hospitality and cultural projects. We treat every
            drawing as a narrative — a sequence of lines that resolve into places
            people remember.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted">
            Grotesk · 300 – 700
          </p>
        </div>
      </div>

      {/* Motion */}
      <div className="mt-28 flex flex-col items-center text-center">
        <div className="reveal w-40">
          <WeaveMark className="h-auto w-full opacity-80" />
        </div>
        <p className="reveal mt-8 max-w-lg font-display text-2xl font-light text-ink">
          Motion is choreographed with{" "}
          <span className="text-turq-deep">GSAP</span> — the weave draws itself,
          type rises from the baseline, and scroll glides on{" "}
          <span className="text-turq-deep">Lenis</span>.
        </p>
        <p className="reveal mt-4 text-xs uppercase tracking-[0.3em] text-muted">
          Reduced-motion honored · 60fps transforms only
        </p>
      </div>
    </section>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="reveal flex items-baseline gap-4 border-t border-ink/10 pt-6">
      <span className="font-display text-sm text-gold-deep">{index}</span>
      <span className="text-xs font-medium uppercase tracking-[0.4em] text-ink-soft">
        {title}
      </span>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-medium uppercase tracking-[0.3em] text-turq-deep">
      {children}
    </span>
  );
}
