import Link from "next/link";
import WeaveMark from "./WeaveMark";

/**
 * Brand lockup: the square woven mark + "LINESTORY" wordmark.
 *
 * Drop the real logo at /public/logo.png (or .svg) and set LOGO_SRC to its
 * path — the image then replaces the WeaveMark stand-in everywhere at once.
 * Left null, the WeaveMark reproduces the same woven diamond in the meantime.
 */
const LOGO_SRC: string | null = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-mark.png`;

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Linestory Studio — home"
      className="group flex items-center gap-3"
    >
      <span className="block h-9 w-9 shrink-0 transition-transform duration-500 group-hover:rotate-[30deg]">
        {LOGO_SRC ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={LOGO_SRC}
            alt="Linestory Studio"
            className="h-full w-full object-contain"
          />
        ) : (
          <WeaveMark className="h-full w-full" />
        )}
      </span>
      <span
        className={`flex flex-col items-center leading-none ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        <span className="font-display text-lg font-normal tracking-[0.14em]">
          LINESTORY
        </span>
        <span className="mt-1 text-[9px] font-medium tracking-[0.55em] opacity-70">
          STUDIO
        </span>
      </span>
    </Link>
  );
}
