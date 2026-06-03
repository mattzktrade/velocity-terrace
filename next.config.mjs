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
    ]
  },
}

export default nextConfig
