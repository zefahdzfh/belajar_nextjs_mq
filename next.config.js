/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/register',
        destination: '/auth/register',
      },
      {
        source: '/login',
        destination: '/auth/login',
      },
      {
        source: '/admin',
        destination: '/auth/admin',
      },
    ]
  },
}

module.exports = nextConfig;
