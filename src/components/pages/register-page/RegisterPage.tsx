import { Box, Typography } from "@mui/material";
import RegisterForm from "./components/RegisterForm";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <Box>
      <RegisterForm />
      <Typography variant="body2" color="text.secondary" pt={1}>
        Already have an account? <Link to="/login">Log in</Link>
      </Typography>
    </Box>
  );
};

export default RegisterPage;
