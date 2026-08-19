import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // fully static — no server, no DB
  images: { unoptimized: true }, // required for static export
  trailingSlash: true, // clean nested routes on static hosts
};

export default nextConfig;
