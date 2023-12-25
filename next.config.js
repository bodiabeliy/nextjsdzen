/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.x-kom.pl',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'prod-api.mediaexpert.pl',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'prod-api.mediamarkt.pl',
        port: '',
      }
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
}

module.exports = nextConfig
