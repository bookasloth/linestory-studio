export type ProjectStatus = "Completed" | "Ongoing";
export type Discipline =
  | "Residential"
  | "Interior"
  | "Hospitality"
  | "Master Planning";

export type Project = {
  slug: string;
  title: string;
  /** Unknown fields are left out and simply not shown. */
  location?: string;
  year?: number;
  status: ProjectStatus;
  discipline: Discipline;
  area?: string;
  client?: string;
  summary: string;
  description: string[];
  /** Photos in /public/projects/<slug>/, cover first. */
  images: string[];
};

const photos = (slug: string, n: number) =>
  Array.from({ length: n }, (_, i) =>
    `/projects/${slug}/${String(i + 1).padStart(2, "0")}.jpg`
  );

export const projects: Project[] = [
  {
    slug: "eureka-3-0",
    title: "Eureka 3.0",
    location: "Pune",
    status: "Completed",
    discipline: "Interior",
    summary: "Workplace interior.",
    description: [],
    images: photos("eureka-3-0", 6),
  },
  {
    slug: "bridge-house",
    title: "Bridge House",
    location: "Nagpur",
    status: "Completed",
    discipline: "Residential",
    summary: "Private residence.",
    description: [],
    images: photos("bridge-house", 7),
  },
  {
    slug: "eureka-2-0",
    title: "Eureka 2.0",
    status: "Completed",
    discipline: "Interior",
    summary: "Workplace interior.",
    description: [],
    images: photos("eureka-2-0", 8),
  },
  {
    slug: "greamio",
    title: "Greamio",
    status: "Completed",
    discipline: "Interior",
    summary: "Workplace interior.",
    description: [],
    images: photos("greamio", 6),
  },
  {
    slug: "eureka-1-0",
    title: "Eureka 1.0",
    status: "Completed",
    discipline: "Interior",
    summary: "Workplace interior.",
    description: [],
    images: photos("eureka-1-0", 6),
  },
  {
    slug: "saraswati-veg",
    title: "Saraswati Veg",
    status: "Completed",
    discipline: "Hospitality",
    summary: "Restaurant interior.",
    description: [],
    images: photos("saraswati-veg", 7),
  },
];

export const disciplines: Discipline[] = [
  "Residential",
  "Interior",
  "Hospitality",
  "Master Planning",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function projectSlugs() {
  return projects.map((p) => p.slug);
}
