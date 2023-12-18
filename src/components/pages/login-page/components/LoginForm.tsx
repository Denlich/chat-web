import { Button, Stack } from "@mui/material";
import Input from "../../../common/ui/form/input-mui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, schema } from "../utils";
import getErrorMessage from "../../../../lib/utils/getErrorMessage";
import AuthService from "../../../../lib/services/auth/AuthService";
import { useAuthentication } from "../../../../hooks/use-authentication/useAuthentication";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { handleSubmit, control, setError } = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const { update } = useAuthentication();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await AuthService.login(data);
      await update().then(() => navigate("/"));
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      if (message === "The password is incorrect") {
        setError("password", { message });
      } else {
        setError("username", {
          message: "The user with this username and password does not exist",
        });
        setError("password", {
          message: "The user with this username and password does not exist",
        });
      }
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={2}>
        <Input name="username" label="username" control={control} />
        <Input name="password" label="password" control={control} isHidden />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ boxShadow: "none" }}
        >
          Log in
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
