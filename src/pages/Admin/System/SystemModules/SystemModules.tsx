// import { IUser } from "../../../../interfaces";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import "./_SystemModules.scss";
import { useGetUserByIdQuery } from "../../../../app/votify.api";
import { useNavigate } from "react-router-dom";

export const SystemModules = () => {
  // delete mock when finished
  // const admin: IUser = {
  //   _id: "001",
  //   role: "sys_admin",
  //   user_name: "Juan Pedro",
  //   user_surname: "Perez Rodriguez",
  //   email: "jperezr@gmail.com",
  //   created_at: "string",
  //   dni: "12345678",
  //   is_active: true,
  // };
  const navigate = useNavigate();
  const user_id = localStorage.getItem("admin_id") || "";
  const { data: sys_user } = useGetUserByIdQuery(user_id);
  const handleLogout = () => {
    localStorage.removeItem("admin_id");
    window.location.href = "/login-admin";
  };

  return (
    <div className="containerSystemModules">
      <div className="containerSystemModules__left">
        <div className="containerSystemModules__left-welcome">
          Bienvenido{" "}
          <div className="containerSystemModules__left-welcome-name">
            {sys_user?.user_name + " " + sys_user?.user_surname}
          </div>
        </div>
        <Button
          variant="outlined"
          startIcon={<LogoutIcon />}
          className="containerSystemModules__left-logoutButton"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </Button>
      </div>
      <div className="containerSystemModules__right">
        <div className="containerSystemModules__right-title">
          Módulos de Administrador de Sistema
        </div>
        <div className="containerSystemModules__right-modules">
          <div
            className="containerSystemModules__right-modules-module-1"
            onClick={() => navigate("/process-requests")}
          >
            Solicitudes de aprobación
          </div>
          <div
            className="containerSystemModules__right-modules-module-2"
            onClick={() => navigate("/electoral-process-administration")}
          >
            Administración procesos electorales
          </div>
          <div
            className="containerSystemModules__right-modules-module-3"
            onClick={() => navigate("/process-admin-management")}
          >
            Gestión de administradores de elección
          </div>
          <div
            className="containerSystemModules__right-modules-module-4"
            onClick={() => navigate("/mailbox")}
          >
            Buzón administrativo
          </div>
        </div>
      </div>
    </div>
  );
};
