import { useChatContext } from "./chat-context";
import { UseChatReturn } from "./types";

export const useChat = (): UseChatReturn => {
  const { chat, getChat } = useChatContext();

  return { chat, getChat };
};
