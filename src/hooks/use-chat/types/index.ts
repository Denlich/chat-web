import { Chat } from "../../../types/chat";

export interface ChatContext {
  chat: Chat | null;
  getChat: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface UseChatReturn extends ChatContext {}
