import { Button, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm, SubmitHandler } from "react-hook-form";

import "./_Credential.scss";

type CredentialInputs = {
  dni: number;
  password: string;
};

export const Credential = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CredentialInputs>();
  const onSubmit: SubmitHandler<CredentialInputs> = async (data) => {
    // submit code

    console.log(data);
  };
  return (
    <div className="credentialContainer">
      <div className="credentialContainer__back">
        <ArrowBackIcon className="credentialContainer__back-icon" />
        <span>Volver</span>
      </div>
      <div className="credentialContainer__content">
        <h2 className="credentialContainer__content-title">
          Ingrese sus credenciales para votar en{" PROCESOSS 1"}
        </h2>
        <form
          className="credentialContainer__content-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label
            className="credentialContainer__content-form-label"
            htmlFor="dni"
          >
            DNI:
          </label>
          <TextField
            {...register("dni", {
              required: "DNI es requerido",
              validate: {
                isNumber: (value) =>
                  !isNaN(Number(value)) || "DNI debe ser un número",
                length: (value) =>
                  value.toString().length === 8 ||
                  "DNI debe tener exactamente 8 dígitos",
              },
            })}
            className="credentialContainer__content-form-field"
            type="text"
            autoComplete="off"
            placeholder="Mi DNI"
            name="dni"
            id="outlined-basic"
            variant="outlined"
          />
          {errors.dni && (
            <div className="credentialContainer__content-form-field-error">
              {errors.dni.message}
            </div>
          )}
          <label
            className="credentialContainer__content-form-label"
            htmlFor="password"
          >
            Contraseña:
          </label>
          <TextField
            {...register("password", { required: "Contraseña es requerido" })}
            className="credentialContainer__content-form-field"
            autoComplete="off"
            placeholder="Contraseña"
            name="password"
            id="outlined-basic"
            variant="outlined"
          />
          {errors.password && (
            <div className="credentialContainer__content-form-field-error">
              {errors.password.message}
            </div>
          )}
          <div>
            <Button
              type="submit"
              className="credentialContainer__content-button"
              variant={"contained"}
            >
              Ingresar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
