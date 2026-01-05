/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.coolmate.me',
        pathname: '/**',
      },
    ],
  },
  // Cho phép cross-origin requests từ các IP trong mạng LAN
  allowedDevOrigins: ['192.168.1.20', 'localhost'],
}

module.exports = nextConfig

