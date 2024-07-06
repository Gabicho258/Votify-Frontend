import { IUser } from '../../../../interfaces';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import './_SystemModules.scss';

export const SystemModules = () => {
  const admin: IUser = {
    user_id: '001',
    role: 'sys_admin',
    user_name: 'Juan Pedro',
    user_surname: 'Perez Rodriguez',
    email: 'jperezr@gmail.com',
    created_at: 'string',
    dni: '12345678',
    is_active: true,
  };
  return (
    <div className='containerSystemModules'>
      <div className='containerSystemModules__left'>
        <div className='containerSystemModules__left-welcome'>
          Bienvenido{' '}
          <div className='containerSystemModules__left-welcome-name'>
            {admin.user_name + ' ' + admin.user_surname}
          </div>
        </div>
        <Button
          variant='outlined'
          startIcon={<LogoutIcon />}
          className='containerSystemModules__left-logoutButton'
          onClick={() => {}}
        >
          Cerrar Sesión
        </Button>
      </div>
      <div className='containerSystemModules__right'>
        <div className='containerSystemModules__right-title'>
          Módulos de Administrador de Sistema
        </div>
        <div className='containerSystemModules__right-modules'>
          <div className='containerSystemModules__right-modules-module-1'>
            Solicitudes de aprobación
          </div>
          <div className='containerSystemModules__right-modules-module-2'>
            Administración procesos electorales
          </div>
          <div className='containerSystemModules__right-modules-module-3'>
            Gestión de administradores de elección
          </div>
          <div className='containerSystemModules__right-modules-module-4'>
            Buzón administrativo
          </div>
        </div>
      </div>
    </div>
  );
};
