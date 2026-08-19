import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WorkIndex from "@/components/work/WorkIndex";

export const metadata: Metadata = {
  title: "Work — Linestory Studio",
  description: "Selected architecture and interior projects by Linestory Studio.",
};

export default function WorkPage() {
  return (
    <main>
      <PageHeader
        label="Projects"
        title="Work"
        intro="A growing index of homes, hospitality and civic projects — each one drawn from its site, light and the lives it holds."
      />
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <WorkIndex />
      </section>
    </main>
  );
}
