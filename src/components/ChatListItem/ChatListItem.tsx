import { IChat } from "../../interfaces";
import "./_ChatListItem.scss";

interface ChatListItemProps {
  chat: IChat;
}
export const ChatListItem = ({ chat }: ChatListItemProps) => {
  const { title, process_name } = chat;
  return (
    <div className="containerChatListItem">
      <div className="containerChatListItem__info">
        <div className="containerChatListItem__info-title">{title}</div>
        <div className="containerChatListItem__info-processName">
          {process_name}
        </div>
      </div>
      <hr className="containerChatListItem__divider" />
    </div>
  );
};
