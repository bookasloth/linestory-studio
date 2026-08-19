import Link from "next/link";
import WeaveMark from "@/components/WeaveMark";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
      <div className="w-24 opacity-80">
        <WeaveMark className="h-auto w-full" />
      </div>
      <p className="mt-10 font-display text-6xl font-light text-ink md:text-8xl">
        404
      </p>
      <p className="mt-4 max-w-md font-display text-2xl font-light italic text-ink-soft">
        This line leads nowhere.
      </p>
      <p className="mt-3 text-sm text-muted">
        The page you&apos;re after has moved or never existed.
      </p>
      <Link
        href="/"
        data-cursor
        className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3 text-sm font-medium uppercase tracking-[0.2em] text-cream transition-colors hover:bg-turq-deep"
      >
        Back home
        <span className="h-px w-8 bg-gold transition-all duration-300 group-hover:w-12" />
      </Link>
    </main>
  );
}
