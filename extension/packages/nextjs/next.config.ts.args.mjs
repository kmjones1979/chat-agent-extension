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
      // Completely externalize AgentKit and all crypto dependencies for client
      config.externals.push(
        "@coinbase/agentkit",
        "@hpke/core",
        "@hpke/common", 
        "@hpke/chacha20poly1305",
        "@privy-io/server-auth",
        "pino",
        "pino-pretty"
      );
      
      // Ignore any crypto modules in node_modules using webpack's IgnorePlugin
      const webpack = require('webpack');
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /@hpke|@privy-io|chacha20poly1305/,
        })
      );
      
      // Alias to empty modules
      config.resolve.alias = {
        ...config.resolve.alias,
        '@coinbase/agentkit': false,
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
