import { Box, Stack, Typography } from "@mui/material";
import * as styles from "./Chat.styles";
import React from "react";

interface ChatProps {
  message: string;
  chatName: string;
  time: string;
  isActive?: boolean;
}

const Chat: React.FC<ChatProps> = ({ message, chatName, time, isActive }) => {
  return (
    <Box sx={styles.chatStyles(isActive)}>
      <Stack direction="column" width="100%">
        <Stack direction="row" justifyContent="space-between">
          <Typography className="chatName" sx={styles.chatName(isActive)}>
            {chatName}
          </Typography>
          <Typography className="chatText" sx={styles.chatText(isActive)}>
            {time}
          </Typography>
        </Stack>
        <Typography className="chatText" sx={styles.chatText(isActive)}>
          {message}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Chat;
