import { Grid, Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Grid spacing={20} bgcolor="#F5F8FB">
      <Box></Box>
      <Box>
        <Outlet />
      </Box>
    </Grid>
  );
};

export default AuthLayout;
