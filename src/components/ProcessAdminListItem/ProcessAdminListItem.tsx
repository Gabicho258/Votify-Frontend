import './_ProcessAdminListItem.scss';
import EmailIcon from '@mui/icons-material/Email';
import ContactsIcon from '@mui/icons-material/Contacts';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { IUser } from '../../interfaces';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface ProcessAdminListItemProps {
  admin: IUser;
}

type EditAdminInputs = {
  user_name: string;
  user_surname: string;
  dni: number;
};

export const ProcessAdminListItem = ({ admin }: ProcessAdminListItemProps) => {
  const { user_name, user_surname, email, dni, is_active } = admin;

  // open and close confirm admin modal
  const [openConfirm, setOpenConfirm] = useState(false);
  const handleOpenConfirm = () => setOpenConfirm(true);
  const handleCloseConfirm = () => setOpenConfirm(false);

  // open and close edit admin modal
  const [openEditAdmin, setOpenEditAdmin] = useState(false);
  const handleOpenEditAdmin = () => setOpenEditAdmin(true);
  const handleCloseEditAdmin = () => setOpenEditAdmin(false);

  // edit admin form
  const {
    register: registerEditAdmin,
    handleSubmit: handleSubmitEditAdmin,
    formState: { errors: errorsEditAdmin },
  } = useForm<EditAdminInputs>();

  const onSubmitEditAdmin: SubmitHandler<EditAdminInputs> = async (data) => {
    // submit add admin code
    const processAdminToEdit = {
      ...data,
      dni: data.dni.toString(),
    };
    console.log(processAdminToEdit);
  };

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
            onClick={handleOpenEditAdmin}
          >
            Editar
          </Button>
          {is_active ? (
            <Button
              variant='outlined'
              className='containerProcessAdminListItem__content-buttons-disable'
              onClick={handleOpenConfirm}
            >
              Inhabilitar
            </Button>
          ) : (
            <Button
              variant='outlined'
              className='containerProcessAdminListItem__content-buttons-enable'
              onClick={handleOpenConfirm}
            >
              Habilitar
            </Button>
          )}
        </div>
      </div>
      <hr className='containerProcessAdminListItem__divider' />
      <Modal
        className='containerProcessAdminListItem__confirmModal'
        open={openConfirm}
        onClose={handleCloseConfirm}
      >
        <div className='containerProcessAdminListItem__confirmModal-content'>
          <div className='containerProcessAdminListItem__confirmModal-content-title'>
            Confirmación
          </div>
          <div className='containerProcessAdminListItem__confirmModal-content-text'>
            ¿Está seguro que quiere {is_active ? 'inhabilitar' : 'habilitar'} a{' '}
            {admin.user_name + ' ' + admin.user_surname}?
          </div>
          <div className='containerProcessAdminListItem__confirmModal-content-buttons'>
            <Button
              variant='outlined'
              className='containerProcessAdminListItem__confirmModal-content-buttons-close'
              onClick={handleCloseConfirm}
            >
              Volver
            </Button>
            <Button
              type='submit'
              variant='outlined'
              className='containerProcessAdminListItem__confirmModal-content-buttons-confirm'
            >
              Guardar
            </Button>
          </div>
        </div>
      </Modal>
      <Modal
        className='containerProcessAdminListItem__editAdminModal'
        open={openEditAdmin}
        onClose={handleCloseEditAdmin}
      >
        <div className='containerProcessAdminListItem__editAdminModal-content'>
          <div className='containerProcessAdminListItem__editAdminModal-content-title'>
            Editar administrador
          </div>
          <form
            onSubmit={handleSubmitEditAdmin(onSubmitEditAdmin)}
            className='containerProcessAdminListItem__editAdminModal-content-form'
          >
            <label
              className='containerProcessAdminListItem__editAdminModal-content-form-label'
              htmlFor='user_name'
            >
              Nombres:
            </label>
            <TextField
              {...registerEditAdmin('user_name', {
                required: 'Nombre es requerido',
              })}
              className='containerProcessAdminListItem__editAdminModal-content-form-field'
              autoComplete='off'
              placeholder='Ingresar nombre'
              name='user_name'
              id='outlined-basic'
              variant='outlined'
              defaultValue={admin.user_name}
            />
            {errorsEditAdmin.user_name && (
              <div className='containerProcessAdminListItem__editAdminModal-content-form-field-error'>
                {errorsEditAdmin.user_name.message}
              </div>
            )}
            <label
              className='containerProcessAdminListItem__editAdminModal-content-form-label'
              htmlFor='user_surname'
            >
              Apellidos:
            </label>
            <TextField
              {...registerEditAdmin('user_surname', {
                required: 'Apellido es requerido',
              })}
              className='containerProcessAdminListItem__editAdminModal-content-form-field'
              autoComplete='off'
              placeholder='Ingresar apellidos'
              name='user_surname'
              id='outlined-basic'
              variant='outlined'
              defaultValue={admin.user_surname}
            />
            {errorsEditAdmin.user_surname && (
              <div className='containerProcessAdminListItem__editAdminModal-content-form-field-error'>
                {errorsEditAdmin.user_surname.message}
              </div>
            )}
            <label
              className='containerProcessAdminListItem__editAdminModal-content-form-label'
              htmlFor='dni'
            >
              DNI:
            </label>
            <TextField
              {...registerEditAdmin('dni', {
                required: 'DNI es requerido',
                validate: {
                  isNumber: (value) =>
                    !isNaN(Number(value)) || 'DNI debe ser un número',
                  length: (value) =>
                    value.toString().length === 8 ||
                    'DNI debe tener exactamente 8 dígitos',
                },
              })}
              className='containerProcessAdminListItem__editAdminModal-content-form-field'
              type='text'
              autoComplete='off'
              placeholder='Ingresar DNI'
              name='dni'
              id='outlined-basic'
              variant='outlined'
              defaultValue={admin.dni}
            />
            {errorsEditAdmin.dni && (
              <div className='containerProcessAdminListItem__editAdminModal-content-form-field-error'>
                {errorsEditAdmin.dni.message}
              </div>
            )}

            <div className='containerProcessAdminListItem__editAdminModal-content-form-buttons'>
              <Button
                variant='outlined'
                className='containerProcessAdminListItem__editAdminModal-content-form-buttons-close'
                onClick={handleCloseEditAdmin}
              >
                Volver
              </Button>
              <Button
                type='submit'
                variant='outlined'
                className='containerProcessAdminListItem__editAdminModal-content-form-buttons-confirm'
              >
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
