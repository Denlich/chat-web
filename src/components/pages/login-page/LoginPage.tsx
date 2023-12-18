import { Box, Typography } from "@mui/material";
import LoginForm from "./components/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Box>
      <LoginForm />
      <Typography variant="body2" color="text.secondary" pt={1}>
        Don't have an account? <Link to="/register">Sign up</Link>
      </Typography>
    </Box>
  );
};

export default LoginPage;
