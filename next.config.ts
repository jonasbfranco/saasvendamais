import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["i.pravatar.cc", "ui-avatars.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

