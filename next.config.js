/** @type {import('next').NextConfig} */

const {i18n} = require("./next-i18next.config")
const nextConfig = {
  reactStrictMode: true,
  i18n,
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
