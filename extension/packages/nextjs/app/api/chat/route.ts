import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { hardhat } from "viem/chains";
import { getPrompt } from "~~/utils/chat";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  // For now, use a default address since we simplified authentication
  // In production, you'd want to get this from the authenticated user
  const userAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"; // Hardhat account #1

  const { messages } = await req.json();
  const { systemPrompt, tools } = await getPrompt({ userAddress, chain: hardhat });

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    messages,
    system: systemPrompt,
    tools,
    maxTokens: 1000,
  });

  return result.toDataStreamResponse();
}