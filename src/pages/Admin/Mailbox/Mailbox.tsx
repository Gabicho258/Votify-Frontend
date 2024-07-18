import "./_Mailbox.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import { IChat, IMessage } from "../../../interfaces";
import { ChatListItem } from "../../../components/ChatListItem/ChatListItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  useCreateMessageMutation,
  useGetChatsByUserIdQuery,
  useGetMessagesByChatIdQuery,
  useGetUserByIdQuery,
  useGetUsersQuery,
  useUpdateChatMutation,
} from "../../../app/votify.api";
import { useState, useRef, useEffect } from "react";

export const Mailbox = () => {
  const conversationRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  };
  const user_id = localStorage.getItem("admin_id") || "";
  const { data: currentUser } = useGetUserByIdQuery(user_id);
  const { data: allUsers } = useGetUsersQuery();
  const [messageToSend, setMessageToSend] = useState("");

  const [selectedChat, setSelectedChat] = useState<Partial<IChat>>({
    title: "Seleccione un chat para empezar",
  });
  const idToSearchChats =
    currentUser?.role === "sys_admin" ? "system" : currentUser?._id;
  const { data: chats, refetch: refetchChats } = useGetChatsByUserIdQuery(
    idToSearchChats || ""
  );
  const handleSelectChat = (chat: IChat) => {
    setSelectedChat(chat);
    setMessageToSend("");
  };
  const friend = allUsers?.find((user) => {
    return (
      selectedChat.members?.some((memberId) => memberId === user._id) &&
      user._id !== idToSearchChats
    );
  });
  const [createMessage] = useCreateMessageMutation();
  const [updateChat] = useUpdateChatMutation();

  const { data: messages, refetch: refetchMessages } =
    useGetMessagesByChatIdQuery(selectedChat?._id || "");
  const handleSendMessage = async () => {
    if (messageToSend.length === 0) return;
    const message: Partial<IMessage> = {
      chat_id: selectedChat._id,
      text: messageToSend,
      sender_id: idToSearchChats,
    };
    try {
      await createMessage(message).unwrap();

      setMessageToSend("");
      await refetchMessages();
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  useEffect(() => {
    refetchMessages();
  }, [selectedChat]);

  const handleCloseChat = async () => {
    try {
      await updateChat({ _id: selectedChat._id, state: "close" }).unwrap();
      // setMessageToSend("");
      await refetchChats();
      setSelectedChat({
        title: "Operación realizada exitosamente",
        process_name: "Seleccione otro chat para continuar",
      });
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  const navigate = useNavigate();

  return (
    <div className="containerMailbox">
      <div className="containerMailbox__back" onClick={() => navigate(-1)}>
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
              ?.filter((chat) => chat.state === "open")
              .map((chat) => {
                return (
                  <ChatListItem
                    handleSelection={handleSelectChat}
                    key={chat._id}
                    chat={chat}
                  />
                );
              })}
          </div>
          <div className="containerMailbox__content-left-close">
            <div className="containerMailbox__content-left-close-title">
              Temas cerrados
            </div>
            {chats
              ?.filter((chat) => chat.state === "close")
              .map((chat) => {
                return (
                  <ChatListItem
                    handleSelection={handleSelectChat}
                    key={chat._id}
                    chat={chat}
                  />
                );
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
                  {friend ? friend?.user_name + " " + friend?.user_surname : ""}
                </div>
              </div>
              <div className="containerMailbox__content-right-chatInfo-top-button">
                {selectedChat.state === "open" &&
                  currentUser?.role === "sys_admin" && (
                    <Button
                      variant="outlined"
                      className="containerMailbox__content-right-chatInfo-top-button-closeChat"
                      onClick={handleCloseChat}
                    >
                      Cerrar tema
                    </Button>
                  )}
              </div>
            </div>

            <hr className="containerMailbox__content-right-chatInfo-divider" />
          </div>

          <div
            className="containerMailbox__content-right-chatMessages"
            ref={conversationRef}
          >
            {messages?.map((message) => {
              return (
                <div
                  key={message._id}
                  className={
                    message.sender_id !== idToSearchChats
                      ? "containerMailbox__content-right-chatMessages-messageSender"
                      : "containerMailbox__content-right-chatMessages-messageReceiver"
                  }
                >
                  <div
                    className={
                      message.sender_id !== idToSearchChats
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
            {selectedChat.state === "open" ? (
              <>
                <input
                  type="text"
                  className="containerMailbox__content-right-chatInput-input"
                  placeholder="Escribe tu mensaje..."
                  value={messageToSend}
                  onChange={(event) => {
                    setMessageToSend(event.target.value);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") handleSendMessage();
                  }}
                />
                <SendIcon
                  className="containerMailbox__content-right-chatInput-send"
                  onClick={handleSendMessage}
                />
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
