/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 🚀 Completely disable ESLint blocking during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 🚀 Skip TypeScript errors too (in case you don’t want strict checks)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
