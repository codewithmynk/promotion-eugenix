/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  trailingSlash: true,
  basePath: '/bhubaneswar/react',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;