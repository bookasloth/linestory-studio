"use client";

import { useEffect, useRef, useState } from "react";

type Photo = { src: string; alt: string };

/**
 * Wraps the gallery: any click on an <img data-lb="i"> opens photo i in a
 * native <dialog> (Esc + focus handling come free). ←/→ keys, buttons and
 * horizontal swipe step through photos.
 */
export default function Lightbox({
  photos,
  children,
}: {
  photos: Photo[];
  children: React.ReactNode;
}) {
  const dlg = useRef<HTMLDialogElement>(null);
  const [i, setI] = useState(0);
  const touchX = useRef<number | null>(null);
  const n = photos.length;
  const go = (d: number) => setI((x) => (x + d + n) % n);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!dlg.current?.open) return;
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const open = (e: React.MouseEvent) => {
    const idx = (e.target as HTMLElement).closest<HTMLElement>("[data-lb]")?.dataset.lb;
    if (idx === undefined) return;
    setI(Number(idx));
    dlg.current?.showModal();
  };

  const btn =
    "absolute top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/25";

  return (
    <>
      <div onClick={open}>{children}</div>
      <dialog
        ref={dlg}
        aria-label="Photo viewer"
        onClick={(e) => e.target === e.currentTarget && dlg.current?.close()}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-ink/95 p-0 backdrop:bg-ink/80"
      >
        {photos[i] && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photos[i].src}
            alt={photos[i].alt}
            onClick={(e) => e.target === e.currentTarget && dlg.current?.close()}
            className="pointer-events-none absolute inset-0 m-auto max-h-[88vh] max-w-[92vw] object-contain"
          />
        )}
        <button onClick={() => dlg.current?.close()} aria-label="Close" className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/25">
          ×
        </button>
        {n > 1 && (
          <>
            <button onClick={() => go(-1)} aria-label="Previous photo" className={`${btn} left-4`}>‹</button>
            <button onClick={() => go(1)} aria-label="Next photo" className={`${btn} right-4`}>›</button>
          </>
        )}
        <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] text-white/70">
          {i + 1} / {n}
        </p>
      </dialog>
    </>
  );
}
