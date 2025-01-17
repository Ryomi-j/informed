import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "news.google.com",
        port: "",
        pathname: "/**",
        // search: "",
      },
    ],
  },
};

export default nextConfig;
