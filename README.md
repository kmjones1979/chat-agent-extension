# 🏗 Scaffold-ETH 2 / chat extension

<img width="500" alt="image" src="https://github.com/user-attachments/assets/90760dfb-0155-42c7-bcbf-1d0f0d6f25de" />

This is a chat agent extension for [scaffold-eth-2](https://github.com/scaffold-eth/scaffold-eth-2), powered by [aisdk](https://sdk.vercel.ai/docs/introduction) & [AgentKit](https://github.com/coinbase/agentkit)

[Demo video](https://www.loom.com/share/8ef07652ccd34b639e4dd8ffae8018bb)


## Install

```bash
npx create-eth@latest -e azf20/chat-agent-extension
cd <project-name>
yarn chain # in one terminal
yarn deploy # in another terminal
cp packages/nextjs/.env.example packages/nextjs/.env.local
# update .env.local with your own values, see below for more information
yarn start # in another terminal
```

.env:
```
AGENT_PRIVATE_KEY= # agent private key, don't use the example key in .env.example in production!
OPENAI_API_KEY= # openai api key
NEXTAUTH_SECRET= # random string
```

- Go to http://localhost:3000/chat and chat to your agent! Ask for its address, and send it some ETH from the scaffold-eth Faucet.
- Update the prompt in `packages/nextjs/utils/chat/index.ts` to change the agent's behavior.
- Add new tools in `packages/nextjs/utils/chat/tools.ts`
