import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/flightmate-demo-landing",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
