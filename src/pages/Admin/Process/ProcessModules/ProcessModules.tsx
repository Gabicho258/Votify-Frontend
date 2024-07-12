import './_ProcessModules.scss';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export const ProcessModules = () => {
  return (
    <div className='containerProcessModules'>
      <div className='containerProcessModules__left'>
        <div className='containerProcessModules__left-welcome'>
          Bienvenido{' '}
          <div className='containerProcessModules__left-welcome-name'>
            Juan Pedro Perez Rodriguez
          </div>
        </div>
        <Button
          variant='outlined'
          startIcon={<LogoutIcon />}
          className='containerProcessModules__left-logoutButton'
          onClick={() => {}}
        >
          Cerrar Sesión
        </Button>
      </div>
      <div className='containerProcessModules__right'>
        <div className='containerProcessModules__right-title'>
          Módulos de Administrador de Procesos
        </div>
        <div className='containerProcessModules__right-modules'>
          <div
            className='containerProcessModules__right-modules-module-1'
            onClick={() => {}}
          >
            Mis procesos electorales
          </div>
          <div
            className='containerProcessModules__right-modules-module-2'
            onClick={() => {}}
          >
            Buzón administrativo
          </div>
        </div>
      </div>
    </div>
  );
};
