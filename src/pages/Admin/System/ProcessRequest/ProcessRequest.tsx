import "./_ProcessRequest.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { AccordionElectionList } from "../../../../components/AccordionElectionList/AccordionElectionList";
import { EmailListItem } from "../../../../components/EmailListItem/EmailListItem";
import { Button } from "@mui/material";
import { formatISODate } from "../../../../utils/DateFormatter";
import { useParams } from "react-router-dom";
import {
  useGetListsByProcessIdQuery,
  useGetProcessByIdQuery,
} from "../../../../app/votify.api";

export const ProcessRequest = () => {
  const { process_id } = useParams();
  const { data: currentProcess } = useGetProcessByIdQuery(process_id || "");
  const { data: lists } = useGetListsByProcessIdQuery(
    currentProcess?._id || ""
  );

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const testEmails: string[] = [
    "alice@example.com",
    "bob@example.net",
    "charlie@example.org",
    "diana@example.com",
    "eric@example.net",
    "fiona@example.org",
    "george@example.com",
    "hannah@example.net",
    "ian@example.org",
    "julia@example.com",
    "kevin@example.net",
    "laura@example.org",
    "michael@example.com",
    "nina@example.net",
    "oliver@example.org",
    "paula@example.com",
    "quentin@example.net",
    "rachel@example.org",
    "steven@example.com",
    "tina@example.net",
  ];

  const { formattedDate: startDate, formattedTime: startTime } = formatISODate(
    currentProcess?.start_date || ""
  );
  const { formattedDate: endDate, formattedTime: endTime } = formatISODate(
    currentProcess?.end_date || ""
  );

  return (
    <div className="containerProcessRequestInfo">
      <div className="containerProcessRequestInfo__back">
        <ArrowBackIcon className="containerProcessRequestInfo__back-icon" />
        <div className="containerProcessRequestInfo__back-text">Volver</div>
      </div>
      <div className="containerProcessRequestInfo__title">
        {currentProcess?.title}
      </div>
      <div className="containerProcessRequestInfo__info">
        <div className="containerProcessRequestInfo__info-date">
          <DateRangeIcon className="containerProcessRequestInfo__info-date-icon" />
          <div className="containerProcessRequestInfo__info-date-text">
            {startDate + " - " + endDate}
          </div>
        </div>
        <div className="containerProcessRequestInfo__info-time">
          <AccessTimeIcon className="containerProcessRequestInfo__info-time-icon" />
          <div className="containerProcessRequestInfo__info-time-text">
            {startTime + " - " + endTime}
          </div>
        </div>
      </div>
      <div className="containerProcessRequestInfo__content">
        <div className="containerProcessRequestInfo__content-left">
          {lists?.map((list) => (
            <AccordionElectionList list={list} key={list._id} />
          ))}
          {/* <AccordionElectionList list={list1} candidates={candidatesList1} />
          <AccordionElectionList list={list2} candidates={candidatesList2} />
          <AccordionElectionList list={list2} candidates={candidatesList2} />
          <AccordionElectionList list={list2} candidates={candidatesList2} />
          <AccordionElectionList list={list2} candidates={candidatesList2} /> */}
        </div>
        <div className="containerProcessRequestInfo__content-right">
          <div className="containerProcessRequestInfo__content-right-participants">
            <div className="containerProcessRequestInfo__content-right-participants-title">
              Participantes
            </div>
            <div className="containerProcessRequestInfo__content-right-participants-number">
              <PersonIcon className="containerProcessRequestInfo__content-right-participants-number-icon" />
              <span className="containerProcessRequestInfo__content-right-participants-number-text">
                {192}
              </span>
            </div>
            <Button
              variant="outlined"
              className="containerProcessRequestInfo__content-right-participants-button"
              onClick={handleOpen}
            >
              Mostrar participantes
            </Button>
          </div>
        </div>
      </div>
      <div className="containerProcessRequestInfo__buttons">
        {currentProcess?.admin_status === "pending" ? (
          <>
            <Button
              variant="outlined"
              className="containerProcessRequestInfo__buttons-approve"
              onClick={() => {}}
            >
              Aprobar
            </Button>
            <Button
              variant="outlined"
              className="containerProcessRequestInfo__buttons-reject"
              onClick={() => {}}
            >
              Rechazar
            </Button>
          </>
        ) : currentProcess?.admin_status === "approved" &&
          (currentProcess?.process_status === "programmed" ||
            currentProcess?.process_status === "in_progress") ? (
          <Button
            variant="outlined"
            className="containerProcessRequestInfo__buttons-cancel"
            onClick={() => {}}
          >
            Cancelar Proceso
          </Button>
        ) : (
          <div></div>
        )}
      </div>
      <Modal
        className="containerProcessRequestInfo__participantsModal"
        open={open}
        onClose={handleClose}
      >
        <div className="containerProcessRequestInfo__participantsModal-content">
          <div className="containerProcessRequestInfo__participantsModal-content-title">
            Participantes
          </div>
          <div className="containerProcessRequestInfo__participantsModal-content-list">
            {testEmails.map((email, i) => {
              return <EmailListItem email={email} key={i} />;
            })}
          </div>
          <div className="containerProcessRequestInfo__participantsModal-content-button">
            <Button
              variant="outlined"
              className="containerProcessRequestInfo__participantsModal-content-button-close"
              onClick={handleClose}
            >
              Cerrar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
