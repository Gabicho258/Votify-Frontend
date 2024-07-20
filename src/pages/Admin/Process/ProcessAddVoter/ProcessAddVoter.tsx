import "./_ProcessAddVoter.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { VoterListItem } from "../../../../components/VoterListItem/VoterListItem";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useVoters } from "../../../../hooks/useVoter";

type AddVoterInputs = {
  user_name: string;
  user_surname: string;
  email: string;
  dni: string;
};

export const ProcessAddVoter = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  // open and close add voter modal
  const [openAddVoter, setOpenAddVoter] = useState(false);
  const handleOpenAddVoter = () => setOpenAddVoter(true);
  const handleCloseAddVoter = () => setOpenAddVoter(false);

  // add voter form
  const {
    register: registerAddVoter,
    handleSubmit: handleSubmitAddVoter,
    formState: { errors: errorsAddVoter },
    reset,
  } = useForm<AddVoterInputs>();

  const { addVoter, removeVoter, voters } = useVoters();
  const onSubmitAddVoter: SubmitHandler<AddVoterInputs> = async (data) => {
    // submit add voter code
    const voterToAdd = {
      ...data,
    };

    addVoter(voterToAdd);
    handleCloseAddVoter();
    reset();
    // console.log(voterToAdd);
  };
  const handleSendToRevision = () => {
    console.log(state);
  };
  if (state === null)
    return <Navigate to={"/process-info-form"} replace={true} />;
  // const voters: Partial<IUser>[] = [
  //   {
  //     dni: "75964143",
  //     user_name: "no deberia",
  //     user_surname: "suno",
  //     email: "gmamanican@unsa.edu.pe",
  //   },
  // ];
  return (
    <div className="containerProcessAddVoter">
      <div
        className="containerProcessAddVoter__back"
        onClick={() => navigate("/process-info-form", { replace: true })}
      >
        <ArrowBackIcon className="containerProcessAddVoter__back-icon" />
        <div className="containerProcessAddVoter__back-text">Volver</div>
      </div>
      <div className="containerProcessAddVoter__title">
        Añadir Participantes
      </div>
      <div className="containerProcessAddVoter__add">
        <Button
          variant="outlined"
          className="containerProcessAddVoter__add-button"
          startIcon={<AddIcon />}
          onClick={handleOpenAddVoter}
        >
          Añadir participante
        </Button>
      </div>
      <div className="containerProcessAddVoter__voters">
        {voters.map((voter, index) => (
          <VoterListItem key={index} removeVoter={removeVoter} voter={voter} />
        ))}
      </div>
      <div className="containerProcessAddVoter__button">
        <Button
          variant="outlined"
          className="containerProcessAddVoter__button-request"
          onClick={handleSendToRevision}
        >
          Enviar el proceso a revisión
        </Button>
      </div>
      <Modal
        className="containerProcessAddVoter__addVoterModal"
        open={openAddVoter}
        onClose={handleCloseAddVoter}
      >
        <div className="containerProcessAddVoter__addVoterModal-content">
          <div className="containerProcessAddVoter__addVoterModal-content-title">
            Nuevo participante
          </div>
          <form
            onSubmit={handleSubmitAddVoter(onSubmitAddVoter)}
            className="containerProcessAddVoter__addVoterModal-content-form"
          >
            <label
              className="containerProcessAddVoter__addVoterModal-content-form-label"
              htmlFor="user_name"
            >
              Nombres:
            </label>
            <TextField
              {...registerAddVoter("user_name", {
                required: "Nombre es requerido",
              })}
              className="containerProcessAddVoter__addVoterModal-content-form-field"
              autoComplete="off"
              placeholder="Ingresar nombre"
              name="user_name"
              id="outlined-basic"
              variant="outlined"
            />
            {errorsAddVoter.user_name && (
              <div className="containerProcessAddVoter__addVoterModal-content-form-field-error">
                {errorsAddVoter.user_name.message}
              </div>
            )}
            <label
              className="containerProcessAddVoter__addVoterModal-content-form-label"
              htmlFor="user_surname"
            >
              Apellidos:
            </label>
            <TextField
              {...registerAddVoter("user_surname", {
                required: "Apellido es requerido",
              })}
              className="containerProcessAddVoter__addVoterModal-content-form-field"
              autoComplete="off"
              placeholder="Ingresar apellidos"
              name="user_surname"
              id="outlined-basic"
              variant="outlined"
            />
            {errorsAddVoter.user_surname && (
              <div className="containerProcessAddVoter__addVoterModal-content-form-field-error">
                {errorsAddVoter.user_surname.message}
              </div>
            )}
            <label
              className="containerProcessAddVoter__addVoterModal-content-form-label"
              htmlFor="dni"
            >
              DNI:
            </label>
            <TextField
              {...registerAddVoter("dni", {
                required: "DNI es requerido",
                validate: {
                  isNumber: (value) =>
                    !isNaN(Number(value)) || "DNI debe ser un número",
                  length: (value) =>
                    value.toString().length === 8 ||
                    "DNI debe tener exactamente 8 dígitos",
                },
              })}
              className="containerProcessAddVoter__addVoterModal-content-form-field"
              type="text"
              autoComplete="off"
              placeholder="Ingresar DNI"
              name="dni"
              id="outlined-basic"
              variant="outlined"
            />
            {errorsAddVoter.dni && (
              <div className="containerProcessAddVoter__addVoterModal-content-form-field-error">
                {errorsAddVoter.dni.message}
              </div>
            )}
            <label
              className="containerProcessAddVoter__addVoterModal-content-form-label"
              htmlFor="email"
            >
              Correo electrónico:
            </label>
            <TextField
              {...registerAddVoter("email", {
                required: "Email es requerido",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Email inválido",
                },
              })}
              className="containerProcessAddVoter__addVoterModal-content-form-field"
              type="text"
              autoComplete="off"
              placeholder="Ingresar correo electrónico"
              name="email"
              id="outlined-basic"
              variant="outlined"
            />
            {errorsAddVoter.email && (
              <div className="containerProcessAddVoter__addVoterModal-content-form-field-error">
                {errorsAddVoter.email.message}
              </div>
            )}
            <div className="containerProcessAddVoter__addVoterModal-content-form-buttons">
              <Button
                variant="outlined"
                className="containerProcessAddVoter__addVoterModal-content-form-buttons-close"
                onClick={handleCloseAddVoter}
              >
                Volver
              </Button>
              <Button
                type="submit"
                variant="outlined"
                className="containerProcessAddVoter__addVoterModal-content-form-buttons-confirm"
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
