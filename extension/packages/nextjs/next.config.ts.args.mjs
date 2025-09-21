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
      util: false,
      child_process: false,
      module: false
    };
    
    // External dependencies that should not be bundled
    config.externals.push("pino-pretty", "lokijs", "encoding");
    
    if (!isServer) {
      // Completely ignore crypto and problematic modules
      config.externals.push(
        "@hpke/core",
        "@hpke/common", 
        "@hpke/chacha20poly1305",
        "@privy-io/server-auth",
        "pino",
        "pino-pretty"
      );
      
      // Use null-loader for any crypto modules that slip through
      config.module.rules.push({
        test: /node_modules\\/((@hpke|@privy-io|pino).*|.*chacha.*|.*crypto.*)\\.js$/,
        use: 'null-loader',
      });
      
      // Alias problematic modules to false
      config.resolve.alias = {
        ...config.resolve.alias,
        '@hpke/core': false,
        '@hpke/common': false,
        '@hpke/chacha20poly1305': false,
        '@privy-io/server-auth': false,
        'pino': false,
        'pino-pretty': false,
      };
    }
    return config;
  }`
};
