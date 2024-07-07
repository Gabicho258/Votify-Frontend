import './_LoginAdmin.scss';

import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

export const LoginAdmin = () => {
  return (
    <div className='containerAdminLogin'>
      <div className='containerAdminLogin__content'>
        <img
          className='containerAdminLogin__content-logo'
          src='https://raw.githubusercontent.com/Gabicho258/votify-frontend/master/src/assets/logo_clean_zoom.png'
          alt='logo-votify'
        />
        <div className='containerAdminLogin__content-info'>
          Ingresar al Portal
          <br /> Administrativo de
          <br /> Votify
        </div>
        <Button
          variant='outlined'
          tabIndex={-1}
          startIcon={<GoogleIcon />}
          className='containerAdminLogin__content-loginButton'
          onClick={() => {}}
        >
          Acceder con Google
        </Button>
      </div>
    </div>
  );
};
