import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const chatStyles = (isActive?: boolean): SxProps<Theme> => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem 0.5rem",
  borderRadius: "0.25rem",
  cursor: "pointer",
  bgcolor: isActive ? "primary.main" : "white",
  color: "white",
  "&:hover": {
    bgcolor: isActive ? "primary.dark" : "primary.main",
    "& .chatText": {
      color: "white",
    },
    "& .chatName": {
      color: "white",
    },
  },
});

export const chatText = (isActive?: boolean): SxProps<Theme> => ({
  fontWeight: 300,
  typography: "body2",
  color: isActive ? "white" : "grey",
});

export const chatName = (isActive?: boolean): SxProps<Theme> => ({
  fontWeight: 300,
  typography: "body1",
  color: isActive ? "white" : "black",
});
