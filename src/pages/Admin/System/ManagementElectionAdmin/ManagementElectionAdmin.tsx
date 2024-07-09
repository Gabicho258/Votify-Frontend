import './_ManagementElectionAdmin.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import { IUser } from '../../../../interfaces';
import { ProcessAdminListItem } from '../../../../components/ProcessAdminListItem/ProcessAdminListItem';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

type AddAdminInputs = {
  user_name: string;
  user_surname: string;
  email: string;
  dni: number;
};

export const ManagementElectionAdmin = () => {
  const [openAddAdmin, setOpenAddAdmin] = useState(false);
  const handleOpenAddAdmin = () => setOpenAddAdmin(true);
  const handleCloseAddAdmin = () => setOpenAddAdmin(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddAdminInputs>();

  const onSubmit: SubmitHandler<AddAdminInputs> = async (data) => {
    // submit code
    const processAdminToCreate = {
      is_active: true,
      role: 'process_admin',
      ...data,
      dni: data.dni.toString(),
    };
    console.log(processAdminToCreate);
  };

  const admins: IUser[] = [
    {
      _id: '1',
      role: 'process_admin',
      user_name: 'Alice',
      user_surname: 'Johnson',
      email: 'alice.johnson@example.com',
      created_at: '2023-01-15T08:00:00Z',
      dni: '12345678',
      is_active: true,
    },
    {
      _id: '2',
      role: 'process_admin',
      user_name: 'Bob',
      user_surname: 'Smith',
      email: 'bob.smith@example.com',
      created_at: '2023-02-20T09:30:00Z',
      dni: '87654321',
      is_active: true,
    },
    {
      _id: '3',
      role: 'process_admin',
      user_name: 'Charlie',
      user_surname: 'Brown',
      email: 'charlie.brown@example.net',
      created_at: '2023-03-10T10:45:00Z',
      dni: '11223344',
      is_active: false,
    },
    {
      _id: '4',
      role: 'process_admin',
      user_name: 'Diana',
      user_surname: 'Miller',
      email: 'diana.miller@example.org',
      created_at: '2023-04-05T11:15:00Z',
      dni: '99887766',
      is_active: false,
    },
    {
      _id: '5',
      role: 'process_admin',
      user_name: 'Eric',
      user_surname: 'Wilson',
      email: 'eric.wilson@example.com',
      created_at: '2023-05-18T14:00:00Z',
      dni: '55667788',
      is_active: true,
    },
    {
      _id: '1',
      role: 'process_admin',
      user_name: 'Alice',
      user_surname: 'Johnson',
      email: 'alice.johnson@example.com',
      created_at: '2023-01-15T08:00:00Z',
      dni: '12345678',
      is_active: true,
    },
    {
      _id: '2',
      role: 'process_admin',
      user_name: 'Bob',
      user_surname: 'Smith',
      email: 'bob.smith@example.com',
      created_at: '2023-02-20T09:30:00Z',
      dni: '87654321',
      is_active: true,
    },
    {
      _id: '3',
      role: 'process_admin',
      user_name: 'Charlie',
      user_surname: 'Brown',
      email: 'charlie.brown@example.net',
      created_at: '2023-03-10T10:45:00Z',
      dni: '11223344',
      is_active: false,
    },
    {
      _id: '4',
      role: 'process_admin',
      user_name: 'Diana',
      user_surname: 'Miller',
      email: 'diana.miller@example.org',
      created_at: '2023-04-05T11:15:00Z',
      dni: '99887766',
      is_active: false,
    },
    {
      _id: '5',
      role: 'process_admin',
      user_name: 'Eric',
      user_surname: 'Wilson',
      email: 'eric.wilson@example.com',
      created_at: '2023-05-18T14:00:00Z',
      dni: '55667788',
      is_active: true,
    },
  ];

  return (
    <div className='containerManagementeElectionAdmin'>
      <div className='containerManagementeElectionAdmin__back'>
        <ArrowBackIcon className='containerManagementeElectionAdmin__back-icon' />
        <div className='containerManagementeElectionAdmin__back-text'>
          Ir a módulos
        </div>
      </div>
      <div className='containerManagementeElectionAdmin__title'>
        Gestión de administradores de elección
      </div>
      <div className='containerManagementeElectionAdmin__add'>
        <Button
          variant='outlined'
          className='containerManagementeElectionAdmin__add-button'
          startIcon={<AddIcon />}
          onClick={handleOpenAddAdmin}
        >
          Añadir
        </Button>
      </div>
      <div className='containerManagementeElectionAdmin__list'>
        {admins.map((admin) => (
          <ProcessAdminListItem admin={admin} />
        ))}
      </div>
      <Modal
        className='containerManagementeElectionAdmin__addAdminModal'
        open={openAddAdmin}
        onClose={handleCloseAddAdmin}
      >
        <div className='containerManagementeElectionAdmin__addAdminModal-content'>
          <div className='containerManagementeElectionAdmin__addAdminModal-content-title'>
            Añadir administrador de elecciones
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='containerManagementeElectionAdmin__addAdminModal-content-form'
          >
            <label
              className='containerManagementeElectionAdmin__addAdminModal-content-form-label'
              htmlFor='user_name'
            >
              Nombres:
            </label>
            <TextField
              {...register('user_name', { required: 'Nombre es requerido' })}
              className='containerManagementeElectionAdmin__addAdminModal-content-form-field'
              autoComplete='off'
              placeholder='Ingresar nombre'
              name='user_name'
              id='outlined-basic'
              variant='outlined'
            />
            {errors.user_name && (
              <div className='containerManagementeElectionAdmin__addAdminModal-content-form-field-error'>
                {errors.user_name.message}
              </div>
            )}
            <label
              className='containerManagementeElectionAdmin__addAdminModal-content-form-label'
              htmlFor='user_surname'
            >
              Apellidos:
            </label>
            <TextField
              {...register('user_surname', {
                required: 'Apellido es requerido',
              })}
              className='containerManagementeElectionAdmin__addAdminModal-content-form-field'
              autoComplete='off'
              placeholder='Ingresar apellidos'
              name='user_surname'
              id='outlined-basic'
              variant='outlined'
            />
            {errors.user_surname && (
              <div className='containerManagementeElectionAdmin__addAdminModal-content-form-field-error'>
                {errors.user_surname.message}
              </div>
            )}
            <label
              className='containerManagementeElectionAdmin__addAdminModal-content-form-label'
              htmlFor='dni'
            >
              DNI:
            </label>
            <TextField
              {...register('dni', {
                required: 'DNI es requerido',
                validate: {
                  isNumber: (value) =>
                    !isNaN(Number(value)) || 'DNI debe ser un número',
                  length: (value) =>
                    value.toString().length === 8 ||
                    'DNI debe tener exactamente 8 dígitos',
                },
              })}
              className='containerManagementeElectionAdmin__addAdminModal-content-form-field'
              type='text'
              autoComplete='off'
              placeholder='Ingresar DNI'
              name='dni'
              id='outlined-basic'
              variant='outlined'
            />
            {errors.dni && (
              <div className='containerManagementeElectionAdmin__addAdminModal-content-form-field-error'>
                {errors.dni.message}
              </div>
            )}
            <label
              className='containerManagementeElectionAdmin__addAdminModal-content-form-label'
              htmlFor='email'
            >
              Correo electrónico:
            </label>
            <TextField
              {...register('email', {
                required: 'Email es requerido',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Email inválido',
                },
              })}
              className='containerManagementeElectionAdmin__addAdminModal-content-form-field'
              type='text'
              autoComplete='off'
              placeholder='Ingresar correo electrónico'
              name='email'
              id='outlined-basic'
              variant='outlined'
            />
            {errors.email && (
              <div className='containerManagementeElectionAdmin__addAdminModal-content-form-field-error'>
                {errors.email.message}
              </div>
            )}
            <div className='containerManagementeElectionAdmin__addAdminModal-content-form-buttons'>
              <Button
                variant='outlined'
                className='containerManagementeElectionAdmin__addAdminModal-content-form-buttons-close'
                onClick={handleCloseAddAdmin}
              >
                Volver
              </Button>
              <Button
                type='submit'
                variant='outlined'
                className='containerManagementeElectionAdmin__addAdminModal-content-form-buttons-confirm'
              >
                Confirmar
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
