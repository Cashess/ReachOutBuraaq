/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['utfs.io'], // Specify the domains from which images will be optimized
      // Optionally, you can specify remote patterns for more advanced configuration
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'utfs.io',
          port: '',
        },
      ],
    },
  };
  

  

export default nextConfig;
