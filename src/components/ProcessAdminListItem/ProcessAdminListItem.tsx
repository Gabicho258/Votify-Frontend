import './_ProcessAdminListItem.scss';
import EmailIcon from '@mui/icons-material/Email';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Button } from '@mui/material';
import { IUser } from '../../interfaces';

interface ProcessAdminListItemProps {
  admin: IUser;
}

export const ProcessAdminListItem = ({ admin }: ProcessAdminListItemProps) => {
  const { user_name, user_surname, email, dni, is_active } = admin;
  return (
    <div className='containerProcessAdminListItem'>
      <div className='containerProcessAdminListItem__content'>
        <div className='containerProcessAdminListItem__content-info'>
          <div className='containerProcessAdminListItem__content-info-top'>
            <div className='containerProcessAdminListItem__content-info-top-name'>
              {user_name + ' ' + user_surname}
            </div>
            {is_active ? (
              <div className='containerProcessAdminListItem__content-info-top-status-active'>
                Activo
              </div>
            ) : (
              <div className='containerProcessAdminListItem__content-info-top-status-inactive'>
                Inactivo
              </div>
            )}
          </div>
          <div className='containerProcessAdminListItem__content-info-down'>
            <div className='containerProcessAdminListItem__content-info-down-email'>
              <EmailIcon className='containerProcessAdminListItem__content-info-down-email-icon' />
              <div className='containerProcessAdminListItem__content-info-down-email-text'>
                {email}
              </div>
            </div>
            <div className='containerProcessAdminListItem__content-info-down-dni'>
              <ContactsIcon className='containerProcessAdminListItem__content-info-down-dni-icon' />
              <div className='containerProcessAdminListItem__content-info-down-dni-text'>
                {dni}
              </div>
            </div>
          </div>
        </div>
        <div className='containerProcessAdminListItem__content-buttons'>
          <Button
            variant='outlined'
            className='containerProcessAdminListItem__content-buttons-edit'
            onClick={() => {}}
          >
            Editar
          </Button>
          {is_active ? (
            <Button
              variant='outlined'
              className='containerProcessAdminListItem__content-buttons-disable'
              onClick={() => {}}
            >
              Inhabilitar
            </Button>
          ) : (
            <Button
              variant='outlined'
              className='containerProcessAdminListItem__content-buttons-enable'
              onClick={() => {}}
            >
              Habilitar
            </Button>
          )}
        </div>
      </div>
      <hr className='containerProcessAdminListItem__divider' />
    </div>
  );
};
