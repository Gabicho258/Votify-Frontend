import "./_Register.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Navigate, useLocation } from "react-router-dom";
import { useCreateUserMutation } from "../../../app/votify.api";

type RegisterInputs = {
  user_name: string;
  user_surname: string;
  email: string;
  dni: number;
};

export const Register = () => {
  const location = useLocation();
  const previousUserData = location.state;
  const [createUser] = useCreateUserMutation();
  // console.log(previousUserData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    // submit code
    const userToCreate = {
      is_active: true,
      role: "voter",
      ...data,
      dni: data.dni.toString(),
    };
    try {
      await createUser(userToCreate).unwrap();
      alert("Usuario creado correctamente");
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
  if (previousUserData === null)
    return <Navigate to={"/login"} replace={true} />;

  return (
    <div className="containerRegister">
      <div className="containerRegister__content">
        <img
          className="containerRegister__content-logo"
          src="https://raw.githubusercontent.com/Gabicho258/votify-frontend/master/src/assets/logo_clean_zoom.png"
          alt="logo-votify"
        />
        <div className="containerRegister__content-title">
          Regístrate en Votify
        </div>
        <hr className="containerRegister__content-divider" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="containerRegister__content-form"
        >
          <label
            className="containerRegister__content-form-label"
            htmlFor="user_name"
          >
            Ingresa tus nombres:
          </label>
          <TextField
            {...register("user_name", { required: "Nombre es requerido" })}
            className="containerRegister__content-form-field"
            autoComplete="off"
            placeholder="Mi nombre"
            name="user_name"
            id="outlined-basic"
            variant="outlined"
            defaultValue={previousUserData.given_name}
          />
          {errors.user_name && (
            <div className="containerRegister__content-form-field-error">
              {errors.user_name.message}
            </div>
          )}
          <label
            className="containerRegister__content-form-label"
            htmlFor="user_surname"
          >
            Ingresa tus apellidos:
          </label>
          <TextField
            {...register("user_surname", { required: "Apellido es requerido" })}
            className="containerRegister__content-form-field"
            autoComplete="off"
            placeholder="Mi apellido"
            name="user_surname"
            id="outlined-basic"
            variant="outlined"
            defaultValue={previousUserData.family_name}
          />
          {errors.user_surname && (
            <div className="containerRegister__content-form-field-error">
              {errors.user_surname.message}
            </div>
          )}
          <label
            className="containerRegister__content-form-label"
            htmlFor="dni"
          >
            Ingresa tu DNI:
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
            className="containerRegister__content-form-field"
            type="text"
            autoComplete="off"
            placeholder="Mi DNI"
            name="dni"
            id="outlined-basic"
            variant="outlined"
          />
          {errors.dni && (
            <div className="containerRegister__content-form-field-error">
              {errors.dni.message}
            </div>
          )}
          <label
            className="containerRegister__content-form-label"
            htmlFor="email"
          >
            Ingresa tu correo electrónico:
          </label>
          <TextField
            {...register("email", {
              required: "Email es requerido",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Email inválido",
              },
            })}
            className="containerRegister__content-form-field"
            type="text"
            autoComplete="off"
            placeholder="Mi correo electrónico"
            name="email"
            id="outlined-basic"
            variant="outlined"
            defaultValue={previousUserData.email}
            InputProps={{
              readOnly: true,
            }}
          />
          {errors.email && (
            <div className="containerRegister__content-form-field-error">
              {errors.email.message}
            </div>
          )}
          <button
            type="submit"
            className="containerRegister__content-form-submit"
          >
            Registrarse
          </button>
          <p className="containerRegister__content-form-help">
            ¿Ya tienes una cuenta?
            <a className="containerRegister__content-form-help-link" href="#">
              Accede aquí
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
