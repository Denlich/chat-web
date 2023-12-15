import { Box, Typography } from "@mui/material";
import React from "react";

const Welcome = React.memo(() => {
  return (
    <Box mx={3}>
      <Typography variant="h4" component="h2">
        Welcome to the chat app
      </Typography>
      <Typography variant="subtitle1" component="p" mt={2}>
        The app is a simple chat app that allows users to create chats with
        friends and share messages.
      </Typography>
    </Box>
  );
});

export default Welcome;
