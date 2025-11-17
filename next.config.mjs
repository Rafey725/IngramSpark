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
    ];
  },
};

export default nextConfig;
