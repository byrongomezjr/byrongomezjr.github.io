/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you're deploying to a custom domain, you might not need basePath
  // basePath: '/byrongomezjr.github.io',
}

module.exports = nextConfig
