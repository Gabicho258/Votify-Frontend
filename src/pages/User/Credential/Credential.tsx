import { Button, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm, SubmitHandler } from "react-hook-form";

import "./_Credential.scss";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useGetProcessByIdQuery } from "../../../app/votify.api";
import { useEffect } from "react";
import { useSpinner } from "../../../hooks/useSpinner";
import { useAlert } from "../../../hooks/useAlert";

type CredentialInputs = {
  dni: number;
  password: string;
};

export const Credential = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CredentialInputs>();
  const { data: currentProcess, isLoading } = useGetProcessByIdQuery(
    state?.process_id
  );
  const { SnackbarComponent, showSnackbar } = useAlert();
  const onSubmit: SubmitHandler<CredentialInputs> = async (data) => {
    if (state.was_used) {
      showSnackbar("Usted ya realizó un voto", "warning");
      return;
    }
    // submit code

    if (state.dni === data.dni && state.password === data.password) {
      navigate("/process-help", {
        state: {
          process_id: state.process_id,
          credential_id: state.credential_id,
        },
        replace: true,
      });
    } else {
      showSnackbar("DNI o contraseña incorrectos", "warning");
    }
  };
  const { Spinner, loading, setLoading } = useSpinner(true);
  useEffect(() => {
    if (!isLoading) {
      setLoading(false); // Terminar la carga cuando la petición haya finalizado
    }
  }, [isLoading, setLoading]);
  if (state === null) return <Navigate to={"/hub"} replace={true} />;
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="credentialContainer">
      <SnackbarComponent />
      <div className="credentialContainer__back" onClick={() => navigate(-1)}>
        <ArrowBackIcon className="credentialContainer__back-icon" />
        <span>Volver</span>
      </div>
      <div className="credentialContainer__content">
        <h2 className="credentialContainer__content-title">
          {`Ingrese sus credenciales para votar en ${currentProcess?.title}`}
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
