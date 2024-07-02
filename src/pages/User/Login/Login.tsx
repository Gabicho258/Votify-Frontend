import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import "./_Login.scss";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export const Login = () => {
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );

      console.log(userInfo);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  // const handleGoogleLogin = () => {};
  return (
    <div className="container">
      <div className="container__left">
        <div className="container__left-info">
          <div className="container__left-info-image">
            <img
              src="https://raw.githubusercontent.com/Gabicho258/votify-frontend/master/src/assets/logo_clean_zoom.png"
              alt="logo-votify"
            />
          </div>
          <div className="container__left-info-welcome">
            BIENVENIDOS A <br />
            VOTIFY
          </div>
          <div className="container__left-info-slogan">
            Centro de votación seguro
            <br /> donde tu voto es confidencial
          </div>
        </div>
        <div className="container__left-login">
          <div className="container__left-login-message">
            Acceda con su cuenta
          </div>
          <Button
            variant="outlined"
            tabIndex={-1}
            startIcon={<GoogleIcon />}
            className="container__left-login-button"
            onClick={() => handleGoogleLogin()}
          >
            Acceder con Google
          </Button>
        </div>
      </div>
      <div className="container__right" />
    </div>
  );
};
