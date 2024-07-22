import axios from "axios";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

import "./_Login.scss";
import { useGetUserByIdQuery, useGetUsersQuery } from "../../../app/votify.api";
import { useSpinner } from "../../../hooks/useSpinner";
import { useEffect } from "react";

export const Login = () => {
  const navigate = useNavigate();

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
        // realiar la navegación al hub de user
        localStorage.setItem("voter_id", userExists._id);
        // console.log(response.data);
        window.location.href = "/hub";
        // navigate("/");
      } else {
        navigate("/end-register", { state: userData });
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  const userDataStorage = localStorage.getItem("voter_id") || "";
  const { data: userLogged, isLoading: isUserLoading } =
    useGetUserByIdQuery(userDataStorage);
  const { Spinner, loading, setLoading } = useSpinner(true);

  if (userLogged) {
    window.location.href = "/hub";
    // return null; // para evitar que siga cargando la página al hacer login en caso de estar logueado
  }

  useEffect(() => {
    if (!(isUserLoading || isAllUsersLoading)) {
      setLoading(false); // Terminar la carga cuando la petición haya finalizado
    }
  }, [isAllUsersLoading, isUserLoading, setLoading]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="containerLogin">
      <div className="containerLogin__left">
        <div className="containerLogin__left-info">
          <div className="containerLogin__left-info-image">
            <img
              src="https://raw.githubusercontent.com/Gabicho258/votify-frontend/master/src/assets/logo_clean_zoom.png"
              alt="logo-votify"
            />
          </div>
          <div className="containerLogin__left-info-welcome">
            BIENVENIDOS A <br />
            VOTIFY
          </div>
          <div className="containerLogin__left-info-slogan">
            Centro de votación seguro
            <br /> donde tu voto es confidencial
          </div>
        </div>
        <div className="containerLogin__left-login">
          <div className="containerLogin__left-login-message">
            Acceda con su cuenta
          </div>
          <Button
            variant="outlined"
            tabIndex={-1}
            startIcon={<GoogleIcon />}
            className="containerLogin__left-login-button"
            onClick={() => handleGoogleLogin()}
          >
            Acceder con Google
          </Button>
        </div>
      </div>
      <div className="containerLogin__right" />
    </div>
  );
};
