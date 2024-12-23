import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  cacheMaxMemorySize: 0,
  cacheHandler: process.env.NODE_ENV === 'production' ? path.resolve('./cache-handler.mjs') : undefined,
  // experimental: {
  //   // This is required for the experimental feature of pre-populating the cache with the initial data
  //   instrumentationHook: true,
  // },
};

export default nextConfig;