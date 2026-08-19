"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import WeaveMark from "@/components/WeaveMark";

gsap.registerPlugin(useGSAP);

/**
 * template.tsx re-mounts on every navigation (unlike layout.tsx), so this
 * runs a fresh enter transition on each route change:
 *   1. a brand curtain wipes up, masking the new page painting in
 *   2. the page content rises + fades into place
 * Reduced-motion users skip straight to the content.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Reset scroll to top on every route change.
      window.scrollTo(0, 0);

      if (reduce) {
        gsap.set(".page-curtain", { display: "none" });
        return;
      }

      const tl = gsap.timeline();
      tl.set(".page-content", { opacity: 0, y: 24 })
        .to(".curtain-mark", {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        })
        .to(
          ".page-curtain",
          {
            yPercent: -100,
            duration: 0.8,
            ease: "expo.inOut",
          },
          "+=0.15"
        )
        .to(
          ".page-content",
          { opacity: 1, y: 0, duration: 0.9, ease: "expo.out" },
          "-=0.5"
        )
        .set(".page-curtain", { display: "none" })
        // Drop the transform so position:fixed descendants (e.g. the Work
        // hover preview) resolve against the viewport, not this element.
        .set(".page-content", { clearProps: "transform,willChange" });
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <div
        className="page-curtain fixed inset-0 z-[80] flex items-center justify-center bg-ink"
        aria-hidden
      >
        <div className="curtain-mark w-24 scale-90 opacity-0">
          <WeaveMark className="h-auto w-full" />
        </div>
      </div>
      <div className="page-content">{children}</div>
    </div>
  );
}
