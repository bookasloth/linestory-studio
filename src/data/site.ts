export const site = {
  name: "Linestory Studio",
  url: "https://www.linestorystudio.in", // canonical origin (no trailing slash)
  email: "hello.linestorystudio@gmail.com",
  phone: "+91 86682 76513",
  location: "Nagpur, Maharashtra",
  address:
    "301, Third Floor, Mauli Niwas, Plot No. 54, Banarjee Layout, Nalanda Nagar, Rameshwari, Nagpur, Maharashtra 440027",
  tagline: "Every line tells a story.",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/linestorystudio" },
    { label: "Facebook", href: "https://www.facebook.com/linestorystudio" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/linestory-studio/" },
  ],
  // From the Google Business Profile — update when the count changes.
  rating: { value: 4.8, count: 21, href: "https://share.google/7EwEiNB8v20Qkjxlm" },
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Architecture",
    body: "Homes and buildings drawn from site, light and the way people actually live — within the client's budget and priorities.",
  },
  {
    title: "Interiors",
    body: "Workplace, hospitality and home interiors — material, joinery and light composed into a single mood.",
  },
  {
    title: "Consultancy",
    body: "Well-informed, holistic architectural consultancy from first brief to site.",
  },
];

// Project clients (names as published on the work pages).
export const clients = ["Eureka", "Greamio", "Saraswati Veg", "Bridge House"];

// Real Google reviews (short excerpts, reviewer names not shown).
export const testimonials = [
  {
    quote: "Best portion of building is office — this is a brilliant work from architecture.",
    name: "Google review",
    role: "Verified Google reviewer",
  },
  {
    quote: "Detailed, creative and understanding services available. Must get the service.",
    name: "Google review",
    role: "Verified Google reviewer",
  },
  {
    quote: "What a great architecture… at our budget… great work.",
    name: "Google review",
    role: "Verified Google reviewer",
  },
];

export const awards: { year: string; title: string }[] = [];

export const team = [
  {
    name: "Kewal Rewatkar",
    role: "Principal Architect",
    href: "https://www.linkedin.com/in/kewal-rewatkar-17095b119",
  },
];
