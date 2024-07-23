import "./_ProcessRequests.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Process } from "../../../../components/ProcessRequest/Process";
// import { IElectionProcess } from "../../../../interfaces";
import { useNavigate } from "react-router-dom";
import { useGetAllProcessesQuery } from "../../../../app/votify.api";
import { useEffect } from "react";
import { useSpinner } from "../../../../hooks/useSpinner";

export const ProcessRequests = () => {
  const navigate = useNavigate();
  const {
    data: electionProcesses,
    isLoading,
    refetch,
  } = useGetAllProcessesQuery();
  const processesCopy = Array.from(electionProcesses || []).filter(
    (process) => process.admin_status === "pending"
  );

  const { Spinner } = useSpinner(true);

  useEffect(() => {
    refetch();
  }, []);
  if (isLoading) {
    return <Spinner />;
  }
  // !isLoading && console.log(electionProcesses?.reverse());

  return (
    <div className="containerProcessRequests">
      <div
        className="containerProcessRequests__back"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon className="containerProcessRequests__back-icon" />
        <div className="containerProcessRequests__back-text">Ir a módulos</div>
      </div>
      <div className="containerProcessRequests__title">
        Solicitudes de aprobación
      </div>
      <div className="containerProcessRequests__list">
        {!isLoading &&
          processesCopy
            ?.reverse()
            .map((process) => <Process process={process} key={process._id} />)}
      </div>
    </div>
  );
};
