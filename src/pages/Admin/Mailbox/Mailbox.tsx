import "./_Mailbox.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import { IChat, IMessage } from "../../../interfaces";
import { ChatListItem } from "../../../components/ChatListItem/ChatListItem";
import { Button } from "@mui/material";

export const Mailbox = () => {
  const currentUser = {
    role: "sys_admin",
    _id: "algunid",
  };
  const chats: IChat[] = [
    {
      _id: "chat1",
      members: ["user1", "user2"],
      title: "revisión de proceso",
      state: "open",
      process_name: "Proceso de revisión",
      createdAt: "2024-07-09T10:00:00Z",
      updatedAt: "2024-07-09T10:30:00Z",
    },
    {
      _id: "chat2",
      members: ["user3", "user4"],
      title: "emergencia en proceso",
      state: "close",
      process_name: "Proceso de desarrollo",
      createdAt: "2024-07-08T15:00:00Z",
      updatedAt: "2024-07-09T09:45:00Z",
    },
    {
      _id: "chat1",
      members: ["user1", "user2"],
      title: "revisión de proceso",
      state: "open",
      process_name: "Proceso de revisión",
      createdAt: "2024-07-09T10:00:00Z",
      updatedAt: "2024-07-09T10:30:00Z",
    },
    {
      _id: "chat2",
      members: ["user3", "user4"],
      title: "emergencia en proceso",
      state: "close",
      process_name: "Proceso de desarrollo",
      createdAt: "2024-07-08T15:00:00Z",
      updatedAt: "2024-07-09T09:45:00Z",
    },
    {
      _id: "chat1",
      members: ["user1", "user2"],
      title: "revisión de proceso",
      state: "open",
      process_name: "Proceso de revisión",
      createdAt: "2024-07-09T10:00:00Z",
      updatedAt: "2024-07-09T10:30:00Z",
    },
    {
      _id: "chat2",
      members: ["user3", "user4"],
      title: "emergencia en proceso",
      state: "close",
      process_name: "Proceso de desarrollo",
      createdAt: "2024-07-08T15:00:00Z",
      updatedAt: "2024-07-09T09:45:00Z",
    },

    {
      _id: "chat1",
      members: ["user1", "user2"],
      title: "revisión de proceso",
      state: "open",
      process_name: "Proceso de revisión",
      createdAt: "2024-07-09T10:00:00Z",
      updatedAt: "2024-07-09T10:30:00Z",
    },
    {
      _id: "chat2",
      members: ["user3", "user4"],
      title: "emergencia en proceso",
      state: "close",
      process_name: "Proceso de desarrollo",
      createdAt: "2024-07-08T15:00:00Z",
      updatedAt: "2024-07-09T09:45:00Z",
    },

    {
      _id: "chat1",
      members: ["user1", "user2"],
      title: "revisión de proceso",
      state: "open",
      process_name: "Proceso de revisión",
      createdAt: "2024-07-09T10:00:00Z",
      updatedAt: "2024-07-09T10:30:00Z",
    },
    {
      _id: "chat2",
      members: ["user3", "user4"],
      title: "emergencia en proceso",
      state: "close",
      process_name: "Proceso de desarrollo",
      createdAt: "2024-07-08T15:00:00Z",
      updatedAt: "2024-07-09T09:45:00Z",
    },

    {
      _id: "chat1",
      members: ["user1", "user2"],
      title: "revisión de proceso",
      state: "open",
      process_name: "Proceso de revisión",
      createdAt: "2024-07-09T10:00:00Z",
      updatedAt: "2024-07-09T10:30:00Z",
    },
    {
      _id: "chat2",
      members: ["user3", "user4"],
      title: "emergencia en proceso",
      state: "close",
      process_name: "Proceso de desarrollo",
      createdAt: "2024-07-08T15:00:00Z",
      updatedAt: "2024-07-09T09:45:00Z",
    },
  ];

  const messages: IMessage[] = [
    {
      _id: "message1",
      chat_id: "chat1",
      sender_id: "algunid",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac quam ultricies dapibus. Fusce scelerisque non tortor non tristique. Pellentesque venenatis magna eu mauris euismod efficitur. ",
      createdAt: "2024-07-09T10:05:00Z",
      updatedAt: "2024-07-09T10:05:00Z",
    },
    {
      _id: "message2",
      chat_id: "chat1",
      sender_id: "user2",
      text: "¡Hola! Todo bien por aquí, gracias.",
      createdAt: "2024-07-09T10:10:00Z",
      updatedAt: "2024-07-09T10:10:00Z",
    },
    {
      _id: "message3",
      chat_id: "chat2",
      sender_id: "user3",
      text: "Buenos días equipo, ¿qué tal va el proyecto?",
      createdAt: "2024-07-08T15:30:00Z",
      updatedAt: "2024-07-08T15:30:00Z",
    },
    {
      _id: "message4",
      chat_id: "chat2",
      sender_id: "user4",
      text: "Hola, vamos avanzando según lo planeado.",
      createdAt: "2024-07-08T16:00:00Z",
      updatedAt: "2024-07-08T16:00:00Z",
    },

    {
      _id: "message2",
      chat_id: "chat1",
      sender_id: "user2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac quam ultricies dapibus. Fusce scelerisque non tortor non tristique. Pellentesque venenatis magna eu mauris euismod efficitur. ",
      createdAt: "2024-07-09T10:10:00Z",
      updatedAt: "2024-07-09T10:10:00Z",
    },
    {
      _id: "message3",
      chat_id: "chat2",
      sender_id: "user3",
      text: "Buenos días equipo, ¿qué tal va el proyecto?",
      createdAt: "2024-07-08T15:30:00Z",
      updatedAt: "2024-07-08T15:30:00Z",
    },
    {
      _id: "message4",
      chat_id: "chat2",
      sender_id: "algunid",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac quam ultricies dapibus. Fusce scelerisque non tortor non tristique. Pellentesque venenatis magna eu mauris euismod efficitur. ",
      createdAt: "2024-07-08T16:00:00Z",
      updatedAt: "2024-07-08T16:00:00Z",
    },

    {
      _id: "message2",
      chat_id: "chat1",
      sender_id: "user2",
      text: "¡Hola! Todo bien por aquí, gracias.",
      createdAt: "2024-07-09T10:10:00Z",
      updatedAt: "2024-07-09T10:10:00Z",
    },
    {
      _id: "message3",
      chat_id: "chat2",
      sender_id: "user3",
      text: "Buenos días equipo, ¿qué tal va el proyecto?",
      createdAt: "2024-07-08T15:30:00Z",
      updatedAt: "2024-07-08T15:30:00Z",
    },
    {
      _id: "message4",
      chat_id: "chat2",
      sender_id: "user4",
      text: "Hola, vamos avanzando según lo planeado.",
      createdAt: "2024-07-08T16:00:00Z",
      updatedAt: "2024-07-08T16:00:00Z",
    },

    {
      _id: "message2",
      chat_id: "chat1",
      sender_id: "user2",
      text: "¡Hola! Todo bien por aquí, gracias.",
      createdAt: "2024-07-09T10:10:00Z",
      updatedAt: "2024-07-09T10:10:00Z",
    },
    {
      _id: "message3",
      chat_id: "chat2",
      sender_id: "user3",
      text: "Buenos días equipo, ¿qué tal va el proyecto?",
      createdAt: "2024-07-08T15:30:00Z",
      updatedAt: "2024-07-08T15:30:00Z",
    },
    {
      _id: "message4",
      chat_id: "chat2",
      sender_id: "user4",
      text: "Hola, vamos avanzando según lo planeado.",
      createdAt: "2024-07-08T16:00:00Z",
      updatedAt: "2024-07-08T16:00:00Z",
    },
  ];

  const selectedChat: IChat = {
    _id: "chat1",
    members: ["user1", "user2"],
    title: "revisión de proceso",
    state: "open",
    process_name: "Proceso de revisión",
    createdAt: "2024-07-09T10:00:00Z",
    updatedAt: "2024-07-09T10:30:00Z",
  };
  return (
    <div className="containerMailbox">
      <div className="containerMailbox__back">
        <ArrowBackIcon className="containerMailbox__back-icon" />
        <div className="containerMailbox__back-text">Ir a módulos</div>
      </div>
      <div className="containerMailbox__content">
        <div className="containerMailbox__content-left">
          <div className="containerMailbox__content-left-open">
            <div className="containerMailbox__content-left-open-title">
              Temas abiertos
            </div>
            {chats
              .filter((chat) => chat.state === "open")
              .map((chat) => {
                return <ChatListItem chat={chat} />;
              })}
          </div>
          <div className="containerMailbox__content-left-close">
            <div className="containerMailbox__content-left-close-title">
              Temas cerrados
            </div>
            {chats
              .filter((chat) => chat.state === "close")
              .map((chat) => {
                return <ChatListItem chat={chat} />;
              })}
          </div>
        </div>
        <div className="containerMailbox__content-right">
          <div className="containerMailbox__content-right-chatInfo">
            <div className="containerMailbox__content-right-chatInfo-top">
              <div className="containerMailbox__content-right-chatInfo-top-info">
                <div className="containerMailbox__content-right-chatInfo-top-info-title">
                  <div className="containerMailbox__content-right-chatInfo-top-info-title-text">
                    {selectedChat.title}
                  </div>
                  {selectedChat.state === "open" && (
                    <div className="containerMailbox__content-right-chatInfo-top-info-title-status-open">
                      Tema abierto
                    </div>
                  )}
                  {selectedChat.state === "close" && (
                    <div className="containerMailbox__content-right-chatInfo-top-info-title-status-close">
                      Tema cerrado
                    </div>
                  )}
                </div>
                <div className="containerMailbox__content-right-chatInfo-top-info-processName">
                  {selectedChat.process_name}
                </div>
                <div className="containerMailbox__content-right-chatInfo-top-info-friendName">
                  Friend Name
                </div>
              </div>
              <div className="containerMailbox__content-right-chatInfo-top-button">
                {selectedChat.state === "open" &&
                  currentUser.role === "sys_admin" && (
                    <Button
                      variant="outlined"
                      className="containerMailbox__content-right-chatInfo-top-button-closeChat"
                      onClick={() => {}}
                    >
                      Cerrar tema
                    </Button>
                  )}
              </div>
            </div>

            <hr className="containerMailbox__content-right-chatInfo-divider" />
          </div>

          <div className="containerMailbox__content-right-chatMessages">
            {messages.map((message) => {
              return (
                <div
                  className={
                    message.sender_id !== currentUser._id
                      ? "containerMailbox__content-right-chatMessages-messageSender"
                      : "containerMailbox__content-right-chatMessages-messageReceiver"
                  }
                >
                  <div
                    className={
                      message.sender_id !== currentUser._id
                        ? "containerMailbox__content-right-chatMessages-messageSender-box"
                        : "containerMailbox__content-right-chatMessages-messageReceiver-box"
                    }
                  >
                    {message.text}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="containerMailbox__content-right-chatInput">
            <input
              type="text"
              className="containerMailbox__content-right-chatInput"
            />
            <SendIcon className="containerMailbox__content-right-chatInput" />
          </div>
        </div>
      </div>
    </div>
  );
};
