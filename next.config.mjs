/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'youtu.be',
        port: '',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    turbo: true,
  },
  async rewrites() {
    return [
      {
        source: '/how-it-works',
        destination: '/publish/how-it-works',
      },
      {
        source: '/plan-your-book',
        destination: '/publish/plan-your-book',
      },
      {
        source: '/how-to-self-publish',
        destination: '/publish/how-to-self-publish',
      },
      {
        source: '/how-to-design-book',
        destination: '/publish/how-to-design-book',
      },
    ];
  },
};

export default nextConfig;
