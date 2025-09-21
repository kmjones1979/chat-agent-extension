import { hardhat } from "viem/chains";
import { NextAuthHandler } from "~~/components/scaffold-eth/NextAuthHandler";

const handler = NextAuthHandler({
  chain: hardhat,
});

export { handler as GET, handler as POST };
