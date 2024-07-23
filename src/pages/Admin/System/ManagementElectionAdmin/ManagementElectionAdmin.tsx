import "./_ManagementElectionAdmin.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { ProcessAdminListItem } from "../../../../components/ProcessAdminListItem/ProcessAdminListItem";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import {
  useCreateUserMutation,
  useGetUsersQuery,
} from "../../../../app/votify.api";
import { useNavigate } from "react-router-dom";
import { useSpinner } from "../../../../hooks/useSpinner";

type AddAdminInputs = {
  user_name: string;
  user_surname: string;
  email: string;
  dni: number;
};

export const ManagementElectionAdmin = () => {
  // React router dom
  const navigate = useNavigate();

  // open and close add admin modal
  const [openAddAdmin, setOpenAddAdmin] = useState(false);
  const handleOpenAddAdmin = () => setOpenAddAdmin(true);
  const handleCloseAddAdmin = () => {
    reset();
    setOpenAddAdmin(false);
  };
  // get admins
  const {
    data: allUsers,
    refetch: refetchUsers,
    isLoading,
  } = useGetUsersQuery();
  const admins = allUsers?.filter((user) => user.role === "process_admin");

  // mutators
  const [createUser] = useCreateUserMutation();

  // add admin form
  const {
    register: registerAddAdmin,
    handleSubmit: handleSubmitAddAdmin,
    formState: { errors: errorsAddAdmin },
    reset,
  } = useForm<AddAdminInputs>();

  const onSubmitAddAdmin: SubmitHandler<AddAdminInputs> = async (data) => {
    // submit add admin code
    const processAdminToCreate = {
      is_active: true,
      role: "process_admin",
      ...data,
      dni: data.dni.toString(),
    };
    try {
      setLoading(true);
      await createUser(processAdminToCreate).unwrap();
      await refetchUsers();
      setLoading(false);
      handleCloseAddAdmin();
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
  const { Spinner, loading, setLoading } = useSpinner(true);
  useEffect(() => {
    if (!isLoading) {
      setLoading(false);
    }
  }, [isLoading, setLoading]);
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="containerManagementeElectionAdmin">
      <div
        className="containerManagementeElectionAdmin__back"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon className="containerManagementeElectionAdmin__back-icon" />
        <div className="containerManagementeElectionAdmin__back-text">
          Ir a módulos
        </div>
      </div>
      <div className="containerManagementeElectionAdmin__title">
        Gestión de administradores de elección
      </div>
      <div className="containerManagementeElectionAdmin__add">
        <Button
          variant="outlined"
          className="containerManagementeElectionAdmin__add-button"
          startIcon={<AddIcon />}
          onClick={handleOpenAddAdmin}
        >
          Añadir
        </Button>
      </div>
      <div className="containerManagementeElectionAdmin__list">
        {admins?.map((admin) => (
          <ProcessAdminListItem key={admin._id} admin={admin} />
        ))}
      </div>
      <Modal
        className="containerManagementeElectionAdmin__addAdminModal"
        open={openAddAdmin}
        onClose={handleCloseAddAdmin}
      >
        <div className="containerManagementeElectionAdmin__addAdminModal-content">
          <div className="containerManagementeElectionAdmin__addAdminModal-content-title">
            Añadir administrador de elecciones
          </div>
          <form
            onSubmit={handleSubmitAddAdmin(onSubmitAddAdmin)}
            className="containerManagementeElectionAdmin__addAdminModal-content-form"
          >
            <label
              className="containerManagementeElectionAdmin__addAdminModal-content-form-label"
              htmlFor="user_name"
            >
              Nombres:
            </label>
            <TextField
              {...registerAddAdmin("user_name", {
                required: "Nombre es requerido",
              })}
              className="containerManagementeElectionAdmin__addAdminModal-content-form-field"
              autoComplete="off"
              placeholder="Ingresar nombre"
              name="user_name"
              id="outlined-basic"
              variant="outlined"
            />
            {errorsAddAdmin.user_name && (
              <div className="containerManagementeElectionAdmin__addAdminModal-content-form-field-error">
                {errorsAddAdmin.user_name.message}
              </div>
            )}
            <label
              className="containerManagementeElectionAdmin__addAdminModal-content-form-label"
              htmlFor="user_surname"
            >
              Apellidos:
            </label>
            <TextField
              {...registerAddAdmin("user_surname", {
                required: "Apellido es requerido",
              })}
              className="containerManagementeElectionAdmin__addAdminModal-content-form-field"
              autoComplete="off"
              placeholder="Ingresar apellidos"
              name="user_surname"
              id="outlined-basic"
              variant="outlined"
            />
            {errorsAddAdmin.user_surname && (
              <div className="containerManagementeElectionAdmin__addAdminModal-content-form-field-error">
                {errorsAddAdmin.user_surname.message}
              </div>
            )}
            <label
              className="containerManagementeElectionAdmin__addAdminModal-content-form-label"
              htmlFor="dni"
            >
              DNI:
            </label>
            <TextField
              {...registerAddAdmin("dni", {
                required: "DNI es requerido",
                validate: {
                  isNumber: (value) =>
                    !isNaN(Number(value)) || "DNI debe ser un número",
                  length: (value) =>
                    value.toString().length === 8 ||
                    "DNI debe tener exactamente 8 dígitos",
                },
              })}
              className="containerManagementeElectionAdmin__addAdminModal-content-form-field"
              type="text"
              autoComplete="off"
              placeholder="Ingresar DNI"
              name="dni"
              id="outlined-basic"
              variant="outlined"
            />
            {errorsAddAdmin.dni && (
              <div className="containerManagementeElectionAdmin__addAdminModal-content-form-field-error">
                {errorsAddAdmin.dni.message}
              </div>
            )}
            <label
              className="containerManagementeElectionAdmin__addAdminModal-content-form-label"
              htmlFor="email"
            >
              Correo electrónico:
            </label>
            <TextField
              {...registerAddAdmin("email", {
                required: "Email es requerido",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Email inválido",
                },
              })}
              className="containerManagementeElectionAdmin__addAdminModal-content-form-field"
              type="text"
              autoComplete="off"
              placeholder="Ingresar correo electrónico"
              name="email"
              id="outlined-basic"
              variant="outlined"
            />
            {errorsAddAdmin.email && (
              <div className="containerManagementeElectionAdmin__addAdminModal-content-form-field-error">
                {errorsAddAdmin.email.message}
              </div>
            )}
            <div className="containerManagementeElectionAdmin__addAdminModal-content-form-buttons">
              <Button
                variant="outlined"
                className="containerManagementeElectionAdmin__addAdminModal-content-form-buttons-close"
                onClick={handleCloseAddAdmin}
              >
                Volver
              </Button>
              <Button
                type="submit"
                variant="outlined"
                className="containerManagementeElectionAdmin__addAdminModal-content-form-buttons-confirm"
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
