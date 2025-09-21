// This file should only run on the server
import "server-only";

export async function createServerTools(chain: any, userAddress: string) {
  // Dynamic import to ensure this only loads on server
  const { createAgentKit, getTools } = await import("./tools");
  const { agentKit, address } = await createAgentKit(chain);

  const systemPrompt = `
  You are a helpful assistant, who can answer questions and make certain onchain interactions based on the user's request.
  The connected user's address is: ${userAddress}. The user might refer to it as "my address" or "me".
  Your address is: ${address}. The user might refer to it as "your address" or "you".
  You are connected to the following network: ${chain.name} (chainId: ${chain.id}, block explorer base url: ${chain.name === "foundry" ? "/blockexplorer" : chain.blockExplorers?.default.url})
  `;

  return {
    systemPrompt,
    tools: getTools(agentKit),
  };
}
