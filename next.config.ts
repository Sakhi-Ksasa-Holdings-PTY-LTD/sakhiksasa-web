import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Use webpack instead of Turbopack for the build (more stable in Docker)
  // Turbopack has a CSS parsing bug: "invalid type: null, expected a string"
  experimental: {
    // Explicitly do NOT use Turbopack
  },
};

export default nextConfig;
