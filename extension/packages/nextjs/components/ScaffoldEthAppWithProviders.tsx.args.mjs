export const preContent = `import { RainbowKitSiweNextAuthProviderWithSession } from "~~/components/scaffold-eth/RainbowKitSiweNextAuthProviderWithSession";`;

export const extraProviders = {
  "RainbowKitSiweNextAuthProviderWithSession": {
    enabled: true,
    getSiweMessageOptions: () => ({ statement: "Sign in to the chat application" })
  }
};

export const globalClassNames = "";

export const overrideProviders = {};
