// next.config.js
// @ts-check

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/env/server.mjs'));

import config from './next-i18next.config.js';
const { i18n } = config;

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: false,
  reactStrictMode: true,
  i18n,
  images: {
    // 🔥 BẮT BUỘC: tắt image optimization để tránh sharp/canvas
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: '**.githubusercontent.com' },
      { protocol: 'https', hostname: '**.googleusercontent.com' },
      { protocol: 'http', hostname: 'localhost', port: '1337', pathname: '/uploads/**' },
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'http', hostname: '127.0.0.1', port: '9000', pathname: '/static/**' },
      { protocol: 'https', hostname: 'medusa-public-images.s3.eu-west-1.amazonaws.com' },
    ],
  },
  // output: 'standalone',
  // 🔥 BẮT BUỘC: loại bỏ các module không tương thích với Cloudflare Workers
  webpack: (config, { isServer, dev }) => {
    if (isServer && !dev) {
      config.externals = [
        ...(config.externals || []),
        /**
         * @param {{ request: string }} data
         * @param {(err?: Error | null, result?: string) => void} callback
         */
        (data, callback) => {
          const { request } = data;
          if (['sharp', 'canvas', 'jose', '@panva/hkdf'].includes(request)) {
            return callback(null, `commonjs ${request}`);
          }
          callback();
        },
      ];
    }
    return config;
  },
};

export default nextConfig;