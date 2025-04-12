import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'paulotech.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
