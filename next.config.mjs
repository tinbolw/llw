/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://cdn.discordapp.com/avatars/**")],
  },
};

export default nextConfig;
