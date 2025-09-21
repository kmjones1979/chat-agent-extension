import { SiweAuth } from "./SiweAuth";

interface ConnectPromptProps {
  address?: string;
  sessionAddress?: string;
}

export const ConnectPrompt = ({ address, sessionAddress }: ConnectPromptProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto h-[600px] my-8 relative bg-white dark:bg-zinc-900 rounded-lg shadow-xl">
      <SiweAuth />
    </div>
  );
};
