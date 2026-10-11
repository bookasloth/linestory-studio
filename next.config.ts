import type { NextConfig } from "next";

// GitHub Pages project sites serve from /<repo>. The deploy workflow sets
// GITHUB_PAGES=true so the site builds under that base path; local dev and
// other hosts (Vercel/Netlify, custom domain) serve from the root.
const basePath = process.env.GITHUB_PAGES === "true" ? "/linestory-studio" : "";

const nextConfig: NextConfig = {
  output: "export", // fully static — no server, no DB
  images: { unoptimized: true }, // required for static export
  trailingSlash: true, // clean nested routes on static hosts
  basePath: basePath || undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath }, // plain <img> paths need it too
};

export default nextConfig;
