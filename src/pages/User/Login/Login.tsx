import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import "./_Login.scss";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export const Login = () => {
  const handleGoogleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      const tokens = await axios.post("http://localhost:5000/auth/google", {
        code: codeResponse.code,
      });

      console.log(tokens);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  // Implicit flow
  // const handleGoogleLogin = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     console.log(tokenResponse);
  //     const userInfo = await axios.get(
  //       "https://www.googleapis.com/oauth2/v3/userinfo",
  //       { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
  //     );

  //     console.log(userInfo);
  //   },
  //   onError: (errorResponse) => console.log(errorResponse),
  // });

  // const handleGoogleLogin = () => {};
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
