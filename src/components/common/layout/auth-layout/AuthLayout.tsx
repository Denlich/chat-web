import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Welcome from "./components/Welcome";

const AuthLayout = () => {
  return (
    <Grid container spacing={20} height="100vh" mt={0}>
      <Grid item xs={4} bgcolor="#F5F8FB">
        <Welcome />
      </Grid>
      <Grid item xs={8} bgcolor="#FFFFFF">
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
