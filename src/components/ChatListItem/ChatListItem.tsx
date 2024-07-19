import { IChat } from "../../interfaces";
import "./_ChatListItem.scss";

interface ChatListItemProps {
  chat: IChat;
  handleSelection: (chat: IChat) => void; // Function to handle selection of a chat. This function is passed down from the parent component.
}
export const ChatListItem = ({ chat, handleSelection }: ChatListItemProps) => {
  const { title, process_name } = chat;
  return (
    <div
      className="containerChatListItem"
      onClick={() => handleSelection(chat)}
    >
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
