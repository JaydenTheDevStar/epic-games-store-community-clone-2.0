/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn1.epicgames.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
