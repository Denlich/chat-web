import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Welcome from "./components/Welcome";

const AuthLayout = () => {
  return (
    <Grid container spacing={20} height="100vh" mt={0}>
      <Grid item xs={4} bgcolor="#F5F8FB">
        <Welcome />
      </Grid>
      <Grid item xs={8} bgcolor="#FFFFFF">
        <Box width="75%">
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
