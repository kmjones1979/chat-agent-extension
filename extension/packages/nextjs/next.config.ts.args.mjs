export const extraWebpackConfig = `
    // Fix for AgentKit crypto dependencies
    config.externals.push({
      '@hpke/core': 'commonjs @hpke/core',
      '@hpke/common': 'commonjs @hpke/common',
    });
    
    // Ignore dynamic requires in crypto modules
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /node_modules\\/@hpke/,
      use: 'null-loader'
    });
`;
