import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { SnackbarOrigin } from "@mui/material/Snackbar";

interface State extends SnackbarOrigin {
  open: boolean;
  message: string;
  type: "error" | "warning" | "info" | "success";
}

export const useAlert = () => {
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "right",
    message: "",
    type: "error", // or "success", "warning", "info" or "default"
  });

  const { vertical, horizontal, open, message, type } = state;

  const showSnackbar = (
    message: string,
    type: "error" | "warning" | "info" | "success"
  ) => {
    setState({
      ...{ vertical: "top", horizontal: "right" },
      open: true,
      message,
      type,
    });
  };

  const hideSnackbar = () => {
    setState((prevState) => ({ ...prevState, open: false }));
  };

  const SnackbarComponent = () => (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      key={vertical + horizontal}
      open={open}
      autoHideDuration={5000}
      onClose={hideSnackbar}
    >
      <Alert
        onClose={hideSnackbar}
        severity={type}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );

  return { showSnackbar, SnackbarComponent };
};
