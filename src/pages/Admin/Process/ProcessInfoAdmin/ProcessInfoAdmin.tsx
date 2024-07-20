import "./_ProcessInfoAdmin.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { AccordionElectionList } from "../../../../components/AccordionElectionList/AccordionElectionList";
import { EmailListItem } from "../../../../components/EmailListItem/EmailListItem";
import { Button } from "@mui/material";
import { formatISODate } from "../../../../utils/DateFormatter";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  useCreateChatMutation,
  useCreateMessageMutation,
  useGetChatsByUserIdQuery,
  useGetCredentialsByProcessIdQuery,
  useGetListsByProcessIdQuery,
  useGetProcessByIdQuery,
} from "../../../../app/votify.api";

type ContactInputs = {
  text: string;
  title: string;
};

export const ProcessInfoAdmin = () => {
  // get information from backend
  const user_id = localStorage.getItem("admin_id") || "";
  const { process_id } = useParams();
  const { data: currentProcess } = useGetProcessByIdQuery(process_id || "");
  const { data: chats } = useGetChatsByUserIdQuery(user_id || "");

  const { data: lists } = useGetListsByProcessIdQuery(
    currentProcess?._id || ""
  );
  const { data: processCredentials } = useGetCredentialsByProcessIdQuery(
    process_id || ""
  );
  const [createChat] = useCreateChatMutation();
  const [createMessage] = useCreateMessageMutation();

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // open and close contact modal
  const existingChat = chats?.some(
    (chat) => chat.process_name === currentProcess?.title
  );

  const [openContact, setOpenContact] = useState(false);
  const handleOpenContact = () => {
    if (existingChat) {
      navigate("/mailbox");
      return;
    }

    setOpenContact(true);
  };
  const handleCloseContact = () => setOpenContact(false);

  // contact form
  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    formState: { errors: errorsContact },
  } = useForm<ContactInputs>();

  const onSubmitContact: SubmitHandler<ContactInputs> = async (data) => {
    // submit add list code
    const contactToAdd = {
      title: data.title,
      owner_id: user_id,
      friend_id: "system",
      state: "open",
      process_name: currentProcess?.title,
    };
    try {
      const { _id } = await createChat(contactToAdd).unwrap();
      console.log(_id);
      const messageToSend = {
        chat_id: _id,
        sender_id: user_id,
        text: data.text,
      };
      await createMessage(messageToSend).unwrap();
      navigate("/mailbox");
    } catch (error) {
      alert(JSON.stringify(error));
    }
    console.log(contactToAdd);
  };

  const { formattedDate: startDate, formattedTime: startTime } = formatISODate(
    currentProcess?.start_date || ""
  );
  const { formattedDate: endDate, formattedTime: endTime } = formatISODate(
    currentProcess?.end_date || ""
  );

  return (
    <div className="containerProcessInfoAdmin">
      <div
        className="containerProcessInfoAdmin__back"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon className="containerProcessInfoAdmin__back-icon" />
        <div className="containerProcessInfoAdmin__back-text">Volver</div>
      </div>
      <div className="containerProcessInfoAdmin__title">
        {currentProcess?.title}
      </div>
      <div className="containerProcessInfoAdmin__status">
        {currentProcess?.admin_status === "approved" && (
          <div className="containerProcessInfoAdmin__status-approved">
            Aprobado
          </div>
        )}
        {currentProcess?.admin_status === "pending" && (
          <div className="containerProcessInfoAdmin__status-pending">
            Pendiente
          </div>
        )}
        {currentProcess?.admin_status === "rejected" && (
          <div className="containerProcessInfoAdmin__status-cancelled">
            Rechazado
          </div>
        )}
      </div>
      <div className="containerProcessInfoAdmin__info">
        <div className="containerProcessInfoAdmin__info-date">
          <DateRangeIcon className="containerProcessInfoAdmin__info-date-icon" />
          <div className="containerProcessInfoAdmin__info-date-text">
            {startDate + " - " + endDate}
          </div>
        </div>
        <div className="containerProcessInfoAdmin__info-time">
          <AccessTimeIcon className="containerProcessInfoAdmin__info-time-icon" />
          <div className="containerProcessInfoAdmin__info-time-text">
            {startTime + " - " + endTime}
          </div>
        </div>
      </div>
      <div className="containerProcessInfoAdmin__content">
        <div className="containerProcessInfoAdmin__content-left">
          {lists?.map((list) => (
            <AccordionElectionList list={list} key={list._id} />
          ))}
        </div>
        <div className="containerProcessInfoAdmin__content-right">
          <div className="containerProcessInfoAdmin__content-right-participants">
            <div className="containerProcessInfoAdmin__content-right-participants-title">
              Participantes
            </div>
            <div className="containerProcessInfoAdmin__content-right-participants-number">
              <PersonIcon className="containerProcessInfoAdmin__content-right-participants-number-icon" />
              <span className="containerProcessInfoAdmin__content-right-participants-number-text">
                {processCredentials?.length}
              </span>
            </div>
            <Button
              variant="outlined"
              className="containerProcessInfoAdmin__content-right-participants-button"
              onClick={handleOpen}
            >
              Mostrar participantes
            </Button>
          </div>
        </div>
      </div>
      <div className="containerProcessInfoAdmin__buttons">
        {currentProcess?.admin_status === "approved" ? (
          <Button
            variant="outlined"
            className="containerProcessInfoAdmin__buttons-contact"
            onClick={handleOpenContact}
          >
            {existingChat
              ? "Ir a buzón administrativo"
              : "Contactar administrador"}
          </Button>
        ) : (
          ""
        )}
      </div>
      <Modal
        className="containerProcessInfoAdmin__participantsModal"
        open={open}
        onClose={handleClose}
      >
        <div className="containerProcessInfoAdmin__participantsModal-content">
          <div className="containerProcessInfoAdmin__participantsModal-content-title">
            Participantes
          </div>
          <div className="containerProcessInfoAdmin__participantsModal-content-list">
            {processCredentials?.map((credential, i) => {
              return <EmailListItem email={credential.email} key={i} />;
            })}
          </div>
          <div className="containerProcessInfoAdmin__participantsModal-content-button">
            <Button
              variant="outlined"
              className="containerProcessInfoAdmin__participantsModal-content-button-close"
              onClick={handleClose}
            >
              Cerrar
            </Button>
          </div>
        </div>
      </Modal>
      <Modal
        className="containerProcessInfoAdmin__contactModal"
        open={openContact}
        onClose={handleCloseContact}
      >
        <div className="containerProcessInfoAdmin__contactModal-content">
          <div className="containerProcessInfoAdmin__contactModal-content-title">
            Contactar administrador
          </div>
          <form
            onSubmit={handleSubmitContact(onSubmitContact)}
            className="containerProcessInfoAdmin__contactModal-content-form"
          >
            <label
              className="containerProcessInfoAdmin__contactModal-content-form-label"
              htmlFor="title"
            >
              Asunto:
            </label>
            <TextField
              {...registerContact("title", {
                required: "Asunto es requerido",
              })}
              className="containerProcessInfoAdmin__contactModal-content-form-field"
              autoComplete="off"
              placeholder="Ingresar título"
              name="title"
              id="outlined-basic"
              variant="outlined"
            />
            {errorsContact.title && (
              <div className="containerProcessInfoAdmin__contactModal-content-form-field-error">
                {errorsContact.title.message}
              </div>
            )}

            <label
              className="containerProcessInfoAdmin__contactModal-content-form-label"
              htmlFor="text"
            >
              Mensaje:
            </label>
            <textarea
              {...registerContact("text", {
                required: "Mensaje es requerido",
              })}
              className="containerProcessInfoAdmin__contactModal-content-form-textarea"
              autoComplete="off"
              placeholder="Ingresar mensaje"
              name="text"
              id="outlined-basic"
            />
            {errorsContact.text && (
              <div className="containerProcessInfoAdmin__contactModal-content-form-field-error">
                {errorsContact.text.message}
              </div>
            )}

            <div className="containerProcessInfoAdmin__contactModal-content-form-buttons">
              <Button
                variant="outlined"
                className="containerProcessInfoAdmin__contactModal-content-form-buttons-close"
                onClick={handleCloseContact}
              >
                Volver
              </Button>
              <Button
                type="submit"
                variant="outlined"
                className="containerProcessInfoAdmin__contactModal-content-form-buttons-confirm"
              >
                Enviar mensaje
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
