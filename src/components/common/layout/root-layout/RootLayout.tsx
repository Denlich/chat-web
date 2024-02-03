import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import * as sxStyles from "./RootLayout.styles";
import SideBar from "./side-bar";
import ChatProvider from "../../../../hooks/use-chat/chat-context/ChatContext";

const RootLayout = () => {
  return (
    <ChatProvider>
      <Grid container height="100vh">
        <Grid item xs={2} sx={sxStyles.leftSidebarStyles}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          <Box>
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </ChatProvider>
  );
};

export default RootLayout;
