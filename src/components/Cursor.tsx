"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Minimal custom cursor: a small gold dot that trails the pointer with a
 * turquoise ring that lags slightly and grows over interactive elements.
 * Falls back gracefully — native cursor is only hidden once this mounts and
 * only on fine-pointer devices (see globals.css .cursor-ready rule).
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    document.documentElement.classList.add("cursor-ready");

    const xDot = gsap.quickTo(dot.current, "x", { duration: 0.15, ease: "power3" });
    const yDot = gsap.quickTo(dot.current, "y", { duration: 0.15, ease: "power3" });
    const xRing = gsap.quickTo(ring.current, "x", { duration: 0.4, ease: "power3" });
    const yRing = gsap.quickTo(ring.current, "y", { duration: 0.4, ease: "power3" });

    const move = (e: PointerEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const grow = () =>
      gsap.to(ring.current, { scale: 2.4, opacity: 0.5, duration: 0.3, ease: "power3" });
    const shrink = () =>
      gsap.to(ring.current, { scale: 1, opacity: 1, duration: 0.3, ease: "power3" });

    window.addEventListener("pointermove", move);
    const targets = document.querySelectorAll("a, button, [data-cursor]");
    targets.forEach((t) => {
      t.addEventListener("pointerenter", grow);
      t.addEventListener("pointerleave", shrink);
    });

    return () => {
      document.documentElement.classList.remove("cursor-ready");
      window.removeEventListener("pointermove", move);
      targets.forEach((t) => {
        t.removeEventListener("pointerenter", grow);
        t.removeEventListener("pointerleave", shrink);
      });
    };
  }, []);

  return (
    <div
      aria-hidden
      className="custom-cursor pointer-events-none fixed inset-0 z-[100] hidden"
    >
      <div
        ref={ring}
        className="fixed left-0 top-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-turq"
      />
      <div
        ref={dot}
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
      />
    </div>
  );
}
