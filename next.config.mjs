/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
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
    ];
  },
};

export default nextConfig;
