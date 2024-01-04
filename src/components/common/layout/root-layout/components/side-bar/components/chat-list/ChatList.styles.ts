import { SxProps, Theme } from "@mui/material/styles";

export const chatListStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  overflowY: "scroll",
  boxSizing: "border-box",
  gap: "1rem",
  height: "100%",
  padding: "0.25rem",
};
