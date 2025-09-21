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
      path: false,
      buffer: false,
      util: false
    };
    
    config.externals.push("pino-pretty", "lokijs", "encoding");

    // Fix for AgentKit crypto dependencies and pino logging
    if (!isServer) {
      config.module.rules.push({
        test: /(@hpke|@coinbase\\/agentkit.*@privy-io|pino|chacha20poly1305)/,
        use: 'null-loader',
      });
      
      // Ignore specific problematic modules
      config.resolve.alias = {
        ...config.resolve.alias,
        'pino-pretty': false,
        '@hpke/core': false,
        '@hpke/common': false,
        '@hpke/chacha20poly1305': false,
      };
    }
    return config;
  }`
};
