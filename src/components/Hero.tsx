"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import WeaveMark from "./WeaveMark";

gsap.registerPlugin(useGSAP);

const WORDMARK = "LINESTORY";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      gsap.set(".weave-bar", { transformOrigin: "50% 50%" });

      if (reduce) {
        gsap.set(
          [".weave-bar", ".wm-letter", ".hero-line", ".hero-fade", ".hero-cue"],
          { opacity: 1, scale: 1, yPercent: 0, scaleX: 1 }
        );
        return;
      }

      // Initial states
      gsap.set(".mark-wrap", { scale: 0.86, opacity: 0 });
      gsap.set(".weave-bar", { scale: 0, opacity: 0 });
      gsap.set(".wm-letter", { yPercent: 115 });
      gsap.set(".hero-line", { scaleX: 0, transformOrigin: "left center" });
      gsap.set(".hero-fade", { opacity: 0, y: 18 });
      gsap.set(".hero-cue", { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.to(".mark-wrap", { scale: 1, opacity: 1, duration: 1 })
        .to(
          ".weave-bar",
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "back.out(1.7)",
            stagger: { grid: [6, 6], from: "center", amount: 1 },
          },
          "-=0.8"
        )
        .to(
          ".wm-letter",
          { yPercent: 0, duration: 1.1, stagger: 0.05, ease: "expo.out" },
          "-=0.55"
        )
        .to(".hero-line", { scaleX: 1, duration: 0.9 }, "-=0.7")
        .to(".hero-fade", { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }, "-=0.6")
        .to(".hero-cue", { opacity: 1, duration: 0.6 }, "-=0.2");

      // Gentle perpetual life on the mark after it settles.
      const loops = [
        gsap.to(".mark-wrap", {
          y: -12,
          duration: 4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 2,
        }),
        gsap.to(".mark-inner", {
          rotate: 6,
          duration: 14,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          transformOrigin: "50% 50%",
        }),
        gsap.to(".hero-cue-dot", {
          y: 10,
          duration: 1.1,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        }),
      ];

      // Stop the idle loops once the hero scrolls out of view.
      const io = new IntersectionObserver(
        ([e]) => loops.forEach((l) => (e.isIntersecting ? l.play() : l.pause())),
        { threshold: 0 }
      );
      if (root.current) io.observe(root.current);
      return () => io.disconnect();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* corner registration marks — architectural drafting nod */}
      <Corner className="left-6 top-6" />
      <Corner className="right-6 top-6 rotate-90" />
      <Corner className="right-6 bottom-6 rotate-180" />
      <Corner className="left-6 bottom-6 -rotate-90" />

      <div className="mark-wrap relative mb-2 w-[clamp(180px,26vw,300px)]">
        <div className="mark-inner">
          <WeaveMark className="h-auto w-full" />
        </div>
      </div>

      {/* Wordmark */}
      <h1 className="font-display text-ink leading-none">
        <span className="sr-only">Linestory Studio</span>
        <span
          aria-hidden
          className="flex justify-center overflow-hidden text-[clamp(2.6rem,11vw,8.5rem)] font-light tracking-[0.02em]"
        >
          {WORDMARK.split("").map((ch, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <span className="wm-letter inline-block">{ch}</span>
            </span>
          ))}
        </span>
      </h1>

      <div className="hero-line mt-4 h-px w-[min(340px,70vw)] bg-turq-deep" />

      <p
        aria-hidden
        className="hero-fade mt-4 text-[clamp(0.7rem,1.4vw,0.9rem)] font-medium uppercase tracking-[0.55em] text-turq-deep"
      >
        Studio
      </p>

      <p className="hero-fade mt-8 max-w-md text-center font-display text-[clamp(1.05rem,2.4vw,1.5rem)] font-light italic text-ink-soft">
        Every line tells a story.
      </p>

      <p className="hero-fade mt-3 text-xs uppercase tracking-[0.3em] text-muted">
        Architecture &nbsp;·&nbsp; Interiors &nbsp;·&nbsp; Master Planning
      </p>

      {/* scroll cue */}
      <div className="hero-cue absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted">
          Scroll
        </span>
        <span className="relative flex h-8 w-px justify-center bg-muted/40">
          <span className="hero-cue-dot absolute top-0 h-2 w-2 -translate-y-1 rounded-full bg-gold" />
        </span>
      </div>
    </section>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`hero-fade pointer-events-none absolute h-6 w-6 border-l border-t border-turq/40 ${className}`}
    />
  );
}
