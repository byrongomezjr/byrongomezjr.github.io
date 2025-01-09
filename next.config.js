/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  productionBrowserSourceMaps: false,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  swcMinify: true,
  compress: true,
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig