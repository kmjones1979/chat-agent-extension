export const configOverrides = {
  webpack: `(config, { isServer }) => {
    config.resolve.fallback = { 
      fs: false, 
      net: false, 
      tls: false,
      crypto: false,
      stream: false,
      url: false,
      zlib: false,
      http: false,
      https: false,
      assert: false,
      os: false,
      path: false
    };
    
    config.externals.push("pino-pretty", "lokijs", "encoding");

    // Fix for AgentKit crypto dependencies and pino logging
    if (!isServer) {
      config.module.rules.push({
        test: /(@hpke\\/core|@hpke\\/common|pino)/,
        use: 'null-loader',
      });
    }
    return config;
  }`
};
