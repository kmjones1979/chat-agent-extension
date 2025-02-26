export const skipQuickStart = true;

export const extraContents = `# 🏗 Scaffold-ETH 2 / chat extension

A simple chat agent that can interact with your deployed contracts, send ETH and more!

Powered by:
- Agentkit
- AI SDK
- RainbowKit
- NextAuth

## Environment Setup

Add the following to your \`.env\`:

\`\`\`
AGENT_PRIVATE_KEY= # agent private key, don't use the example key in .env.example in production!
OPENAI_API_KEY= # openai api key
NEXTAUTH_SECRET= # random string
\`\`\`

## Usage

Go to http://localhost:3000/chat and chat to your agent! Ask for its address, and send it some ETH from the scaffold-eth Faucet.

You can customize the agent by:
- Updating the prompt in \`packages/nextjs/utils/chat/index.ts\` to change the agent's behavior
- Adding new tools in \`packages/nextjs/utils/chat/tools.ts\`

## Development Environment

> Start your local network (a local instance of a blockchain):

\`\`\`
yarn chain
\`\`\`

> in a second terminal window, 🛰 deploy your contract (locally):

\`\`\`
yarn deploy
\`\`\`

> in a third terminal window, start your 📱 frontend:

\`\`\`
yarn start
\`\`\`

📱 Open [http://localhost:3000](http://localhost:3000) to see the app.
`;