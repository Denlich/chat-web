import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { ChatContext } from "../types";
import { Chat } from "../../../types/chat";
import { useAuthentication } from "../../use-authentication/useAuthentication";

const chatContext = createContext<ChatContext>({
  chat: {} as Chat,
  getChat: () => null,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useChatContext = () => useContext(chatContext);

const ChatProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [chatId, setChatId] = useState<number | null>(null);

  const context: ChatContext = useMemo(() => {
    const { user } = useAuthentication();

    return {
      chat: {
        id: chatId,
        name: "123",
        users: [
          user,
          {
            id: 123,
            email: "123asd@email.com",
            name: "example",
            surname: "example",
            username: "example",
          },
        ],
      },
      getChat: setChatId,
    };
  }, [chatId]);

  return (
    <chatContext.Provider value={context}>{children}</chatContext.Provider>
  );
};

export default ChatProvider;
