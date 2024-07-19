import "./_InProgressProcessInfo.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";
import { IElectionProcess } from "../../../interfaces";

export const InProgressProcessInfo = () => {
  const navigate = useNavigate();

  const process: IElectionProcess = {
    _id: "1a2b3c4d5e6f7g8h9i0j",
    user_id: "user123",
    is_owner: true,
    title: "Presidential Election 2024",
    admin_status: "approved",
    process_status: "active",
    start_date: "2024-08-01T00:00:00.000Z",
    end_date: "2024-11-01T23:59:59.000Z",
  };

  return (
    <div className="containerInProgressProcessInfo">
      <div
        className="containerInProgressProcessInfo__back"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon className="containerInProgressProcessInfo__back-icon" />
        <div className="containerInProgressProcessInfo__back-text">Volver</div>
      </div>
      <div className="containerInProgressProcessInfo__content">
        <div className="containerInProgressProcessInfo__content-box">
          <div className="containerInProgressProcessInfo__content-box-title">
            {process.title}
          </div>
          <div className="containerInProgressProcessInfo__content-box-info">
            <div className="containerInProgressProcessInfo__content-box-info-date">
              <DateRangeIcon className="containerInProgressProcessInfo__content-box-info-date-icon" />
              <div className="containerInProgressProcessInfo__content-box-info-date-text">
                {new Date(process.start_date).toLocaleDateString() +
                  " - " +
                  new Date(process.end_date).toLocaleDateString()}
              </div>
            </div>
            <div className="containerInProgressProcessInfo__content-box-info-time">
              <AccessTimeIcon className="containerInProgressProcessInfo__content-box-info-time-icon" />
              <div className="containerInProgressProcessInfo__content-box-info-time-text">
                {new Date(process.start_date).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }) +
                  " - " +
                  new Date(process.end_date).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
              </div>
            </div>
          </div>
          <div className="containerInProgressProcessInfo__content-box-help">
            <div className="containerInProgressProcessInfo__content-box-help-label">
              Antes de ir a votar
            </div>
            <ul className="containerInProgressProcessInfo__content-box-help-list">
              <li className="containerInProgressProcessInfo__content-box-help-list-item">
                Debe haber revisado las credenciales enviadas a su correo.
              </li>
              <li className="containerInProgressProcessInfo__content-box-help-list-item">
                Debe disponer de tiempo para realizar el proceso electoral.
              </li>
              <li className="containerInProgressProcessInfo__content-box-help-list-item">
                Debe haberse informado sobre los candidatos en las listas
                participantes.
              </li>
            </ul>
          </div>
          <div className="containerInProgressProcessInfo__content-box-button">
            <button className="containerInProgressProcessInfo__content-box-button-continue">
              Ir a votar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
