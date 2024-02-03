import { Box } from "@mui/material";
import { useState } from "react";
import * as styles from "./ChatList.styles";
import Chat from "./chat";
import { useChat } from "../../../../../../../hooks/use-chat/useChat";

const chatList = [
  {
    data: "some message",
    chatName: "user",
    time: "12:00",
  },
];

for (let i = 0; i < 50; i++) {
  chatList.push({
    data: "some message",
    chatName: "user",
    time: "15:12",
  });
}

const ChatList = () => {
  const [isActive, setIsActive] = useState<number | null>(null);
  const { getChat } = useChat();

  const handleClick = (id: number) => {
    setIsActive(id);
    getChat(id);
  };

  return (
    <Box sx={styles.chatListStyles}>
      {chatList.map((chat, index) => (
        <Chat
          key={index}
          message={chat.data}
          chatName={chat.chatName}
          time={chat.time}
          isActive={isActive !== null ? isActive === index : false}
          onClick={() => handleClick(index)}
        />
      ))}
    </Box>
  );
};

export default ChatList;
