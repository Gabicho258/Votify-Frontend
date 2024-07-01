import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import "./_Login.scss";

export const Login = () => {
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
          >
            Acceder con Google
          </Button>
        </div>
      </div>
      <div className="container__right" />
    </div>
  );
};
