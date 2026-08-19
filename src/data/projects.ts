export type ProjectStatus = "Completed" | "Ongoing";
export type Discipline =
  | "Residential"
  | "Interior"
  | "Hospitality"
  | "Master Planning";

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: number;
  status: ProjectStatus;
  discipline: Discipline;
  area: string;
  client: string;
  summary: string;
  description: string[];
  /** Drop real photos in /public/projects/<slug>/ and list them here.
   *  Empty → a branded placeholder renders automatically. */
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "orange-house",
    title: "Orange House",
    location: "Nagpur",
    year: 2023,
    status: "Completed",
    discipline: "Residential",
    area: "4,200 sq ft",
    client: "Private Residence",
    summary:
      "A family home organised around a sunlit central court and a screen of terracotta fins.",
    description: [
      "Orange House folds around a central courtyard that pulls light and air deep into the plan. Living spaces open onto the court through full-height sliding screens, dissolving the line between inside and out.",
      "A veil of terracotta fins wraps the western face — cutting harsh afternoon sun while casting a slow, shifting pattern across the interior through the day.",
    ],
    images: [],
  },
  {
    slug: "courtyard-house",
    title: "Courtyard House",
    location: "Pune",
    year: 2022,
    status: "Completed",
    discipline: "Residential",
    area: "3,600 sq ft",
    client: "Private Residence",
    summary:
      "Three stone volumes stitched together by a landscaped court and a single continuous roof.",
    description: [
      "Three stone volumes are threaded together by a shared court and a single folded roof. The composition reads as a small hamlet — private rooms held apart, shared life gathered in between.",
      "Local basalt and lime plaster ground the house in its region, ageing slowly into the site.",
    ],
    images: [],
  },
  {
    slug: "tao-kitchen",
    title: "TAO Asian Kitchen",
    location: "Mumbai",
    year: 2023,
    status: "Completed",
    discipline: "Interior",
    area: "2,800 sq ft",
    client: "TAO Hospitality",
    summary:
      "A pan-Asian restaurant interior built from warm timber, woven screens and low light.",
    description: [
      "TAO is an intimate dining room built from woven timber screens, brushed brass and pools of low light. Booths nest inside carved alcoves, each its own quiet world.",
      "The material palette borrows the studio's woven signature — layered slats that filter sightlines and soften sound.",
    ],
    images: [],
  },
  {
    slug: "screen-house",
    title: "Screen House",
    location: "Bengaluru",
    year: 2021,
    status: "Completed",
    discipline: "Residential",
    area: "5,100 sq ft",
    client: "Private Residence",
    summary:
      "A perforated brick screen turns the whole facade into a breathing, light-filtering skin.",
    description: [
      "A perforated brick jaali wraps Screen House, turning its entire street face into a breathing skin. By day it reads as solid; by night it glows like a lantern.",
      "Behind the screen, split levels step around a double-height living volume crowned by a skylight.",
    ],
    images: [],
  },
  {
    slug: "riverbend-retreat",
    title: "Riverbend Retreat",
    location: "Goa",
    year: 2024,
    status: "Ongoing",
    discipline: "Hospitality",
    area: "1.2 acres",
    client: "Riverbend Resorts",
    summary:
      "A cluster of laterite villas stepping down toward the water through native planting.",
    description: [
      "Riverbend is a small retreat of laterite villas stepping down toward the river through native planting. Each villa frames a single, deliberate view of the water.",
      "Passive cooling, rainwater harvesting and local stone keep the resort light on its landscape.",
    ],
    images: [],
  },
  {
    slug: "civic-weave",
    title: "Civic Weave",
    location: "Hyderabad",
    year: 2024,
    status: "Ongoing",
    discipline: "Master Planning",
    area: "18 acres",
    client: "Municipal Development Authority",
    summary:
      "A mixed-use civic quarter woven together by a continuous public spine and shaded streets.",
    description: [
      "Civic Weave reorganises an eighteen-acre quarter around a continuous public spine — a shaded pedestrian street that stitches housing, markets and civic rooms into one walkable fabric.",
      "Blocks are sized and turned to hold breeze and shade, trading car dominance for a fine-grained, human-scaled network.",
    ],
    images: [],
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
