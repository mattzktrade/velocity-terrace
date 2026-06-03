/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/races/monaco',
        destination: '/monacoprogramme',
        permanent: true,
      },
      {
        source: '/races/abu-dhabi',
        destination: '/?section=contact',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
