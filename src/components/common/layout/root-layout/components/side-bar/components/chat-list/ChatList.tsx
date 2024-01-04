import { Box } from "@mui/material";
import { useState } from "react";
import * as styles from "./ChatList.styles";
import Chat from "./components/Chat";

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

  return (
    <Box sx={styles.chatListStyles}>
      {chatList.map((chat, index) => (
        <Chat
          key={index}
          message={chat.data}
          chatName={chat.chatName}
          time={chat.time}
          isActive={isActive !== null ? isActive === index : false}
          onClick={() => setIsActive(index)}
        />
      ))}
    </Box>
  );
};

export default ChatList;
