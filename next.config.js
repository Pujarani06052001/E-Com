/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
// next.config.js
module.exports = {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    onDemandEntries: {
      maxInactiveAge: 25 * 1000,
      pagesBufferLength: 2,
    },
    webpack(config, { dev, isServer }) {
      if (!dev && !isServer) {
        // Suppress warnings for specific attributes
        config.module.rules.push({
          test: /\.(js|jsx)$/,
          loader: 'string-replace-loader',
          options: {
            search: /(data-new-gr-c-s-check-loaded|data-gr-ext-installed)/,
            replace: '',
          },
        });
      }
  
      return config;
    },
  };
  