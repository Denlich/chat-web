import { Box, Grid } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import Welcome from "./components/Welcome";
import { useAuthentication } from "../../../../hooks/use-authentication/useAuthentication";

const AuthLayout = () => {
  const { isLoggedIn } = useAuthentication();
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

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
