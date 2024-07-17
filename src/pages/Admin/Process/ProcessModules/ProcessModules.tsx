import "./_ProcessModules.scss";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useGetUserByIdQuery } from "../../../../app/votify.api";

export const ProcessModules = () => {
  const navigate = useNavigate();
  const user_id = localStorage.getItem("admin_id") || "";
  const { data: process_user } = useGetUserByIdQuery(user_id);
  const handleLogout = () => {
    localStorage.removeItem("admin_id");
    window.location.href = "/login-admin";
  };

  return (
    <div className="containerProcessModules">
      <div className="containerProcessModules__left">
        <div className="containerProcessModules__left-welcome">
          Bienvenido{" "}
          <div className="containerProcessModules__left-welcome-name">
            {process_user?.user_name + " " + process_user?.user_surname}
          </div>
        </div>
        <Button
          variant="outlined"
          startIcon={<LogoutIcon />}
          className="containerProcessModules__left-logoutButton"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </Button>
      </div>
      <div className="containerProcessModules__right">
        <div className="containerProcessModules__right-title">
          Módulos de Administrador de Procesos
        </div>
        <div className="containerProcessModules__right-modules">
          <div
            className="containerProcessModules__right-modules-module-1"
            onClick={() => navigate("/process-list-admin")}
          >
            Mis procesos electorales
          </div>
          <div
            className="containerProcessModules__right-modules-module-2"
            onClick={() => navigate("/mailbox")}
          >
            Buzón administrativo
          </div>
        </div>
      </div>
    </div>
  );
};
