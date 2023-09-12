/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: /*  */'localhost',
        port: '',
        pathname: '/**',
      },
      /* {
        protocol: 'http',
        hostname: '194.163.140.101',
        port: '',
        pathname: '/**',
      }, */
    ],
  },
}

module.exports = nextConfig
