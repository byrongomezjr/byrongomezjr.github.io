/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repo name is different from the root domain, add:
  basePath: '/byrongomezjr.github.io',
}

module.exports = nextConfig
