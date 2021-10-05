module.exports = {
  reactStrictMode: false,
  // target: 'serverless',
  webpack(config, {}) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      // fs: false is nessecary even for webpack 4
      fs: false,
      // the rest is nessesary for webpack 5 in next 11
      child_process: false,
      net: false,
      crypto: false,
    };
    return config;
  },
};
