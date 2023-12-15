import { Button, Stack } from "@mui/material";
import Input from "../../../common/ui/form/input-mui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, schema } from "../utils";
import getErrorMessage from "../../../../lib/utils/getErrorMessage";
import AuthService from "../../../../lib/services/auth";

const LoginForm = () => {
  const { handleSubmit, control, setError } = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await AuthService.login(data);
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
