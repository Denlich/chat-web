import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import * as styles from "./Chat.styles";

interface ChatProps {
  message: string;
  chatName: string;
  time: string;
  isActive?: boolean;
  onClick: () => void;
}

const Chat: React.FC<ChatProps> = ({
  message,
  chatName,
  time,
  isActive,
  onClick,
}) => {
  return (
    <Box sx={styles.chatStyles(isActive)} onClick={onClick}>
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
