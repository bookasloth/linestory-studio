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
  { label: "Work", href: "/" }, // homepage is the work index
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

// Real Google reviews, lightly trimmed from the Google Business Profile.
export const testimonials = [
  {
    quote:
      "A true visionary, Kewal blends creativity with functionality in the most seamless way. His designs don't just shape buildings — they shape experiences. Every detail reflects care, purpose, and artistic brilliance.",
    name: "Aditya Anil Waghmare",
    role: "Google review",
  },
  {
    quote:
      "Kewal is an exceptional individual possesses remarkable skills and talents, making him one of the finest architects in Nagpur. He worked for more than 5 projects for me, and each time, he astounded with his ability to consistently deliver exceptional work.",
    name: "Atul Warghane",
    role: "Google review",
  },
  {
    quote:
      "Very intelligent architect and knowledgeable about his work, very honest and punctual about timeline. Happy with his work.",
    name: "Gautam Enterprise",
    role: "Google review",
  },
  {
    quote: "Best architect who understand the clients requirement with given budget.",
    name: "Kunjan Nasre",
    role: "Google review",
  },
  {
    quote: "Detailed, Creative and understanding services available. Must get the Service.",
    name: "Praveen Morpaka",
    role: "Google review",
  },
  {
    quote: "Practical approach with creative solutions.",
    name: "Kunal Uke",
    role: "Google review",
  },
];

export const awards: { year: string; title: string }[] = [];

export const team: { name: string; role?: string; href?: string }[] = [
  {
    name: "Kewal Rewatkar",
    role: "Principal Architect",
    href: "https://www.linkedin.com/in/kewal-rewatkar-17095b119",
  },
  { name: "Raghini Dhurve", role: "Intern" },
  { name: "Chaitanya Chikhale", role: "Jr. Architect" },
  { name: "Anshul Urkude", role: "Intern" },
];
