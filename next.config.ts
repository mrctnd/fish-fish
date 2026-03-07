import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fish-fish",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
