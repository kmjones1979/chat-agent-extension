"use client";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const SiweAuth = () => {
  const { address } = useAccount();

  return (
    <div className="text-center space-y-4">
      <p className="text-sm text-zinc-600 dark:text-zinc-400 px-8">
        {address 
          ? "Wallet connected! You can start chatting with the AI assistant."
          : "Please connect your wallet to start chatting with the AI assistant"}
      </p>
      <div className="mt-4">
        <ConnectButton />
      </div>
    </div>
  );
};
