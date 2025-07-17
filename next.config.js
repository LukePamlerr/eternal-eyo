/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers: async () => [
    {
      source: '/videos/:path*',
      headers: [
        { key: 'Content-Type', value: 'video/mp4' },
        { key: 'Content-Disposition', value: 'inline' },
      ],
    },
  ],
};

module.exports = nextConfig;
