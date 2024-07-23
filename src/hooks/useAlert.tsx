import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { SnackbarOrigin } from "@mui/material/Snackbar";

interface State extends SnackbarOrigin {
  open: boolean;
  message: string;
}

export const useAlert = () => {
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "right",
    message: "",
  });

  const { vertical, horizontal, open, message } = state;

  const showSnackbar = (newState: SnackbarOrigin, message: string) => {
    setState({ ...newState, open: true, message });
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
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );

  return { showSnackbar, SnackbarComponent };
};
