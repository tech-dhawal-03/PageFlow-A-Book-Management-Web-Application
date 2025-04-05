import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    remotePatterns : [
      
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
          port: '', // leave empty unless a custom port is used
          pathname: '/**', // supports wildcard
        },
      
    ]
  }
};

export default nextConfig;
