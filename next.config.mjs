import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  cacheMaxMemorySize: process.env.REDIS_URL ? 0 : undefined,
  cacheHandler: process.env.REDIS_URL ? path.resolve("./cache-handler.mjs") : undefined,
  // experimental: {
  //   // This is required for the experimental feature of pre-populating the cache with the initial data
  //   instrumentationHook: true,
  // },
};

export default nextConfig;
