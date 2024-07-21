import "./_Process.scss";
import { IElectionProcess } from "../../interfaces";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Button } from "@mui/material";
// import { formatISODate } from "../../utils/DateFormatter";
import { useNavigate } from "react-router-dom";

interface ProcessRequestProps {
  process: IElectionProcess;
  isUser?: boolean;
  isProcessAdmin?: boolean;
}

export const Process = ({
  process,
  isUser,
  isProcessAdmin,
}: ProcessRequestProps) => {
  const navigate = useNavigate();

  const { title, start_date, end_date, process_status, admin_status } = process;
  // const { formattedDate: startDate, formattedTime: startTime } =
  //   formatISODate(start_date);
  // const { formattedDate: endDate, formattedTime: endTime } =
  //   formatISODate(end_date);
  return (
    <div className="containerProcessRequest">
      <div className="containerProcessRequest__content">
        <div className="containerProcessRequest__content-left">
          <div className="containerProcessRequest__content-left-title">
            <span className="containerProcessRequest__content-left-title-text">
              {title}
            </span>
            {admin_status === "pending"
              ? ""
              : (process_status === "in_progress" && (
                  <span className="containerProcessRequest__content-left-title-status-inProgress">
                    En curso
                  </span>
                )) ||
                (process_status === "programmed" && (
                  <span className="containerProcessRequest__content-left-title-status-programmed">
                    Programado
                  </span>
                )) ||
                (process_status === "cancelled" && (
                  <span className="containerProcessRequest__content-left-title-status-cancelled">
                    Cancelado
                  </span>
                )) ||
                (process_status === "done" && (
                  <span className="containerProcessRequest__content-left-title-status-done">
                    Realizado
                  </span>
                ))}
          </div>
          <div className="containerProcessRequest__content-left-info">
            <div className="containerProcessRequest__content-left-info-date">
              <DateRangeIcon className="containerProcessRequest__content-left-info-date-icon" />
              <div className="containerProcessRequest__content-left-info-date-text">
                {new Date(start_date).toLocaleDateString() +
                  " - " +
                  new Date(end_date).toLocaleDateString()}
              </div>
            </div>
            <div className="containerProcessRequest__content-left-info-time">
              <AccessTimeIcon className="containerProcessRequest__content-left-info-time-icon" />
              <div className="containerProcessRequest__content-left-info-time-text">
                {new Date(start_date).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }) +
                  " - " +
                  new Date(end_date).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="containerProcessRequest__content-right">
          <Button
            variant="outlined"
            className="containerProcessRequest__content-right-button"
            onClick={() => {
              if (isUser) {
                // navigate(`/process-request/${process._id}/user`);
                if (process_status === "in_progress") {
                  navigate(`/in-progress-process-info/${process._id}`);
                } else {
                  navigate(`/process-info/${process._id}`);
                }
              } else if (isProcessAdmin) {
                navigate(`/process-info-admin/${process._id}`);
              } else {
                navigate(`/process-request/${process._id}`);
              }
            }}
          >
            Ir al proceso
          </Button>
        </div>
      </div>
      <hr className="containerProcessRequest__divider" />
    </div>
  );
};
