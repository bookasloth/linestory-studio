import type { NextConfig } from "next";

// Hosted on Vercel at the custom domain (root path). The contact form needs
// a server route, so this is no longer a static export.
const nextConfig: NextConfig = {
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: "" }, // plain <img> paths read this
};

export default nextConfig;
