/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/innovate-qa-events',
  assetPrefix: '/innovate-qa-events',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
