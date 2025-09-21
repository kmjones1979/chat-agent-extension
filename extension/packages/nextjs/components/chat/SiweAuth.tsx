"use client";

import { useSession } from "next-auth/react";
import { useAccount } from "wagmi";
import { CustomConnectButton } from "./CustomConnectButton";

export const SiweAuth = () => {
  const { data: session, status } = useSession();
  const { address } = useAccount();

  // Debug logging
  console.log("SiweAuth Debug:", {
    session: session?.address,
    address,
    status,
    isAuthenticated: session?.address && address && session.address.toLowerCase() === address.toLowerCase(),
  });

  return (
    <div className="text-center space-y-4">
      <p className="text-sm text-zinc-600 dark:text-zinc-400 px-8">
        {address && session?.address && address.toLowerCase() !== session.address.toLowerCase()
          ? "Connected wallet doesn't match authenticated session. Please sign in again."
          : "Please sign in to start chatting with the AI assistant"}
      </p>
      <div className="mt-4">
        <CustomConnectButton />
      </div>
    </div>
  );
};
