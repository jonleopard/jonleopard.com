/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: false,
  future: { webpack5: true },
  async redirects() {
    return [
      {
        source: '/dotfile-management-with-gnu-stow',
        destination: '/blog/dotfile-management-with-gnu-stow',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
