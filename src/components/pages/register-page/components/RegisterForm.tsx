import { useForm } from "react-hook-form";
import { RegisterFormValues, schema } from "../utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack, Button, Typography } from "@mui/material";
import Input from "../../../common/ui/form/input-mui";
import getErrorMessage from "../../../../lib/utils/getErrorMessage";
import AuthService from "../../../../lib/services/auth/AuthService";

const RegisterForm = () => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await AuthService.register(data);
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      setError("root", { message });
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={2}>
        <Input name="name" label="name" control={control} />
        <Input name="surname" label="surname" control={control} />
        <Input name="username" label="username" control={control} />
        <Input name="email" label="email" control={control} />
        <Input name="password" label="password" control={control} isHidden />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ boxShadow: "none" }}
        >
          Sign up
        </Button>
        {errors.root && (
          <Typography variant="body2" color="error">
            {errors.root.message}
          </Typography>
        )}
      </Stack>
    </form>
  );
};

export default RegisterForm;
