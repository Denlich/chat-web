import { Box, Typography } from "@mui/material";
import { useChat } from "../hooks/use-chat/useChat";

const HomePage = () => {
  const { chat } = useChat();

  return (
    <Box>
      <Typography>{chat?.id}</Typography>
    </Box>
  );
};

export default HomePage;
