/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Only use basePath in production (when building for GitHub Pages/deployment)
  basePath: process.env.NODE_ENV === 'production' ? '/innovate-qa-events' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/innovate-qa-events' : '',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    dangerouslyAllowSVG: true,
  },
}

export default nextConfig
