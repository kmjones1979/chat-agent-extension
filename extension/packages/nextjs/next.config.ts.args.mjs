export const configOverrides = {
  webpack: `(config, { isServer }) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");

    // Fix for AgentKit crypto dependencies
    if (!isServer) {
      config.module.rules.push({
        test: /(@hpke\\/core|@hpke\\/common)/,
        use: 'null-loader',
      });
    }
    return config;
  }`
};
