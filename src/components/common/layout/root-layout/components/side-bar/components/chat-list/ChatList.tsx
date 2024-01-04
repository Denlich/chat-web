import { Box } from "@mui/material";
import Chat from "./components/Chat";
import * as sxStyles from "./ChatList.styles";

const chatList = [
  { data: "some message", chatName: "user", time: "12:00", isActive: true },
];

for (let i = 0; i < 50; i++) {
  chatList.push({
    data: "some message",
    chatName: "user",
    time: "15:12",
    isActive: false,
  });
}

const ChatList = () => {
  return (
    <Box sx={sxStyles.chatListStyles}>
      {chatList.map((chat, index) => (
        <Chat
          key={index}
          message={chat.data}
          chatName={chat.chatName}
          time={chat.time}
          isActive={chat.isActive}
        />
      ))}
    </Box>
  );
};

export default ChatList;
