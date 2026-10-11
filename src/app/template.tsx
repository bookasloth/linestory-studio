/**
 * template.tsx re-mounts on every navigation (unlike layout.tsx), so this
 * replays a brand curtain + content rise on each route change.
 * ponytail: pure CSS (globals.css) — the GSAP version could leave the
 * curtain stuck over the page; CSS always finishes. Reduced motion skips it.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        className="page-curtain pointer-events-none fixed inset-0 z-[80] flex items-center justify-center bg-ink"
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-mark.png`}
          alt=""
          className="curtain-mark h-auto w-24"
        />
      </div>
      <div className="page-content">{children}</div>
    </>
  );
}
