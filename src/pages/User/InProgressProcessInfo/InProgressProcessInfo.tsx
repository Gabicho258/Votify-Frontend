import "./_InProgressProcessInfo.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetCredentialsByUserIdQuery,
  useGetProcessByIdQuery,
  useGetUserByIdQuery,
} from "../../../app/votify.api";
import { useEffect } from "react";

export const InProgressProcessInfo = () => {
  const { process_id } = useParams();

  const navigate = useNavigate();
  const { data: process } = useGetProcessByIdQuery(process_id || "");

  const user_id = localStorage.getItem("voter_id") || "";
  const { data: userCredentials, refetch: refetchCredentials } =
    useGetCredentialsByUserIdQuery(user_id);
  const { data: currentUser } = useGetUserByIdQuery(user_id);
  const credentialForCurrentProcess = userCredentials?.find(
    (credential) => credential.process_id === process_id
  );
  const handleContinue = () => {
    if (!credentialForCurrentProcess) {
      alert("No tienes acceso para este proceso.");
      navigate("/hub", { replace: true });
      return;
    }

    navigate("/credential", {
      state: {
        process_id,
        dni: currentUser?.dni,
        password: credentialForCurrentProcess?.password,
        was_used: credentialForCurrentProcess?.was_used,
        credential_id: credentialForCurrentProcess?._id,
      },
    });
  };
  useEffect(() => {
    refetchCredentials();
  }, []);
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
            {process?.title}
          </div>
          <div className="containerInProgressProcessInfo__content-box-info">
            <div className="containerInProgressProcessInfo__content-box-info-date">
              <DateRangeIcon className="containerInProgressProcessInfo__content-box-info-date-icon" />
              <div className="containerInProgressProcessInfo__content-box-info-date-text">
                {new Date(process?.start_date || "").toLocaleDateString() +
                  " - " +
                  new Date(process?.end_date || "").toLocaleDateString()}
              </div>
            </div>
            <div className="containerInProgressProcessInfo__content-box-info-time">
              <AccessTimeIcon className="containerInProgressProcessInfo__content-box-info-time-icon" />
              <div className="containerInProgressProcessInfo__content-box-info-time-text">
                {new Date(process?.start_date || "").toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }) +
                  " - " +
                  new Date(process?.end_date || "").toLocaleTimeString([], {
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
            <button
              className="containerInProgressProcessInfo__content-box-button-continue"
              onClick={handleContinue}
            >
              Ir a votar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
