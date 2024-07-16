import "./_ProcessRequests.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Process } from "../../../../components/ProcessRequest/Process";
// import { IElectionProcess } from "../../../../interfaces";
import { useNavigate } from "react-router-dom";
import { useGetAllProcessesQuery } from "../../../../app/votify.api";

export const ProcessRequests = () => {
  // delete when view is finished
  // const testProcess: IElectionProcess = {
  //   user_id: "asd",
  //   is_owner: false,
  //   title: "presidenciales123",
  //   admin_status: "pendiente",
  //   process_status: "pendiente",
  //   start_date: "2024-06-05T10:55:00.000Z",
  //   end_date: "2024-06-06T10:55:00.000Z",
  //   _id: "668af922469ca1cbb2cb0722",
  // };
  const navigate = useNavigate();
  const { data: electionProcesses, isLoading } = useGetAllProcessesQuery();
  const processesCopy = Array.from(electionProcesses || []).filter(
    (process) => process.admin_status === "pending"
  );

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
