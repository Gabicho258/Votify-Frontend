import "./_LoginAdmin.scss";

import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useGetUserByIdQuery, useGetUsersQuery } from "../../../app/votify.api";
import { useSpinner } from "../../../hooks/useSpinner";
// import { useNavigate } from "react-router-dom";

interface State extends SnackbarOrigin {
  open: boolean;
  message: string;
}

export const LoginAdmin = () => {
  // Notification
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "right",
    message: "Error al iniciar sesión con Google",
  });
  const { vertical, horizontal, open } = state;
  const handleClick = (newState: SnackbarOrigin, message: string) => {
    setState({ ...newState, open: true, message });
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setState({ ...state, open: false });
  };
  // END - Notification
  // const navigate = useNavigate();
  const { data: allUsers, isLoading: isAllUsersLoading } = useGetUsersQuery();
  const API_GATEWAY = import.meta.env.VITE_API_GATEWAY;
  const handleGoogleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      const response = await axios.post(`${API_GATEWAY}/auth/google`, {
        code: codeResponse.code,
      });
      const userData = response.data.user;
      const userExists = allUsers?.find(
        (user) => user.email === userData.email
      );
      if (userExists) {
        if (userExists.role === "sys_admin") {
          // navigate("/system-admin-modules");
          localStorage.setItem("admin_id", userExists._id);
          window.location.href = "/system-admin-modules";
        } else if (userExists.role === "process_admin") {
          console.log("process_admin");
          // navigate("/process-admin-modules");
          localStorage.setItem("admin_id", userExists._id);
          window.location.href = "/process-admin-modules";
        } else {
          handleClick(
            { vertical: "top", horizontal: "right" },
            "El usuario no tiene permiso para acceder"
          );
          console.log("user no admin");
        }
      } else {
        handleClick(
          { vertical: "top", horizontal: "right" },
          "El usuario no existe"
        );
        // navigate("/end-register", { state: userData });
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  const adminDataStorage = localStorage.getItem("admin_id") || "";
  const { data: adminLogged, isLoading: isAdminLoading } =
    useGetUserByIdQuery(adminDataStorage);
  if (adminLogged) {
    if (adminLogged?.role === "sys_admin") {
      window.location.href = "/system-admin-modules";
    } else if (adminLogged?.role === "process_admin") {
      window.location.href = "/process-admin-modules";
    }
    // return null; // para evitar que siga cargando la página al hacer login en caso de estar logueado
  }
  const { Spinner, loading, setLoading } = useSpinner(true);
  useEffect(() => {
    if (!(isAdminLoading || isAllUsersLoading)) {
      setLoading(false); // Terminar la carga cuando la petición haya finalizado
    }
  }, [isAllUsersLoading, isAdminLoading, setLoading]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="containerAdminLogin">
      <Snackbar
        className="qwe"
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={state.message}
      />

      <div className="containerAdminLogin__content">
        <img
          className="containerAdminLogin__content-logo"
          src="https://raw.githubusercontent.com/Gabicho258/votify-frontend/master/src/assets/logo_clean_zoom.png"
          alt="logo-votify"
        />
        <div className="containerAdminLogin__content-info">
          Ingresar al Portal
          <br /> Administrativo de
          <br /> Votify
        </div>
        <Button
          variant="outlined"
          tabIndex={-1}
          startIcon={<GoogleIcon />}
          className="containerAdminLogin__content-loginButton"
          onClick={handleGoogleLogin}
        >
          Acceder con Google
        </Button>
      </div>
    </div>
  );
};
