import { TextField } from "@mui/material";
import { InputProps } from "./types";
import { Controller } from "react-hook-form";

const Input: React.FC<InputProps> = ({ label, name, control, isHidden }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          label={label}
          variant="outlined"
          fullWidth
          onChange={onChange}
          type={isHidden ? "password" : "text"}
        />
      )}
    />
  );
};

export default Input;
