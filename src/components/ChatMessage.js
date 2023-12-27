import { PROFILE_ICON, generateProfileImage } from "../utils/constants";

const ChatMessage = ({name , message}) => {
  return (
    <div className="flex items-center p-1 my-1">
      <img className="h-6 rounded-full" src={generateProfileImage()} alt="PROFILE ICON" />
      <span className="font-bold text-md px-2">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;
