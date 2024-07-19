import "./_ProcessListAdmin.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Process } from "../../../../components/ProcessRequest/Process";
import { useNavigate } from "react-router-dom";
import { useGetProcessesByUserIdQuery } from "../../../../app/votify.api";

export const ProcessListAdmin = () => {
  const user_id = localStorage.getItem("admin_id") || "";
  // const { data: process_user } = useGetUserByIdQuery(user_id);
  const { data: electionProcesses } = useGetProcessesByUserIdQuery(
    user_id || ""
  );

  const navigate = useNavigate();
  return (
    <div className="containerProcessListAdmin">
      <div
        className="containerProcessListAdmin__back"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon className="containerProcessListAdmin__back-icon" />
        <div className="containerProcessListAdmin__back-text">Ir a módulos</div>
      </div>
      <div className="containerProcessListAdmin__title">Mis procesos</div>
      <div className="containerProcessListAdmin__add">
        <Button
          variant="outlined"
          className="containerProcessListAdmin__add-button"
          startIcon={<AddIcon />}
          onClick={() => {}}
        >
          Crear proceso
        </Button>
      </div>
      <div className="containerProcessListAdmin__approvedList">
        <div className="containerProcessListAdmin__approvedList-title">
          Procesos aprobados
          <hr className="containerProcessListAdmin__approvedList-title-divider" />
        </div>
        {electionProcesses
          ?.filter((process) => process.admin_status === "approved")
          .map((process) => (
            <Process key={process._id} process={process} />
          ))}
      </div>
      <div className="containerProcessListAdmin__pendingList">
        <div className="containerProcessListAdmin__pendingList-title">
          Procesos pendientes
          <hr className="containerProcessListAdmin__pendingList-title-divider" />
        </div>
        {electionProcesses
          ?.filter((process) => process.admin_status === "pending")
          .map((process) => (
            <Process key={process._id} process={process} />
          ))}
      </div>
      <div className="containerProcessListAdmin__cancelledList">
        <div className="containerProcessListAdmin__cancelledList-title">
          Procesos rechazados
          <hr className="containerProcessListAdmin__cancelledList-title-divider" />
        </div>
        {electionProcesses
          ?.filter((process) => process.admin_status === "rejected")
          .map((process) => (
            <Process key={process._id} process={process} />
          ))}
      </div>
    </div>
  );
};
