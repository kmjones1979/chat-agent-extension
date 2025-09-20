export const configOverrides = {
  plugins: [
    {
      name: "next-superjson-plugin"
    },
    {
      name: "@next/mdx"
    }
  ],
  compilerOptions: {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
  }
};
