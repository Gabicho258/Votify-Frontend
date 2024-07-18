import "./_ElectoralProcessAdmin.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Process } from "../../../../components/ProcessRequest/Process";
import { useGetAllProcessesQuery } from "../../../../app/votify.api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ElectoralProcessAdmin = () => {
  const navigate = useNavigate();
  const { data: electionProcesses, refetch } = useGetAllProcessesQuery();

  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className="containerElectoralProcessAdmin">
      <div
        className="containerElectoralProcessAdmin__back"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon className="containerElectoralProcessAdmin__back-icon" />
        <div className="containerElectoralProcessAdmin__back-text">
          Ir a módulos
        </div>
      </div>
      <div className="containerElectoralProcessAdmin__title">
        Administración procesos electorales
      </div>
      <div className="containerElectoralProcessAdmin__inProgressList">
        <div className="containerElectoralProcessAdmin__inProgressList-title">
          Procesos en curso
          <hr className="containerElectoralProcessAdmin__inProgressList-title-divider" />
        </div>

        {electionProcesses
          ?.filter((process) => process.process_status === "in_progress")
          .map((process) => (
            <Process key={process._id} process={process} />
          ))}
      </div>
      <div className="containerElectoralProcessAdmin__list">
        {electionProcesses
          ?.filter((process) => {
            return (
              process.process_status !== "in_progress" &&
              process.admin_status !== "pending"
            );
          })
          .map((process) => (
            <Process key={process._id} process={process} />
          ))}
      </div>
    </div>
  );
};
