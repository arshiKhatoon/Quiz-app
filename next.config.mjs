/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: Disabling ESLint checks during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: Ignoring TypeScript errors during build
    ignoreBuildErrors: true,
  },
  // No static export configuration
};

export default nextConfig;
