"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { clients } from "@/data/site";

gsap.registerPlugin(useGSAP);

export default function ClientsStrip() {
  const track = useRef<HTMLDivElement>(null);

  // Seamless marquee: two copies, translate by half, loop.
  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce || !track.current) return;
      const marquee = gsap.to(track.current, {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      // Only run the marquee while it's on screen.
      const io = new IntersectionObserver(
        ([e]) => (e.isIntersecting ? marquee.play() : marquee.pause()),
        { threshold: 0 }
      );
      io.observe(track.current);
      return () => io.disconnect();
    },
    { scope: track }
  );

  const row = [...clients, ...clients];

  return (
    <section className="border-y border-ink/10 py-14 md:py-20">
      <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.4em] text-muted">
        Trusted by
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div ref={track} className="flex w-max gap-16 whitespace-nowrap px-8">
          {row.map((c, i) => (
            <span
              key={i}
              className="font-display text-xl font-light text-ink-soft md:text-2xl"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
