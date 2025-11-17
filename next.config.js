const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,

  // Performance optimizations
  // Note: optimizeCss requires additional setup, keeping disabled for now

  // Image optimization for static export
  images: {
    unoptimized: true, // Required for static export
  },

  // Compression
  compress: true,

  // Headers are handled by netlify.toml for static export
}

module.exports = withBundleAnalyzer(nextConfig)
