/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true, // <-- disables next/image optimizations
  },
};

export default nextConfig;
