/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  target: 'serverless',
  devIndicators: {
    buildActivity: false,
  },
}

module.exports = nextConfig
