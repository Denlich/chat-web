import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import * as sxStyles from "./RootLayout.styles";
import SideBar from "./components/side-bar";

const RootLayout = () => {
  return (
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
  );
};

export default RootLayout;
