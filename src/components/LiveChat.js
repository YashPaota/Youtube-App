import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage } from "../utils/constants";
import { generateRandomName } from "../utils/constants";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="  ">
      
      <div className=" p-5 flex flex-col-reverse top-10 ml-2 border border-black  bg-slate-100 rounded-lg w-full h-[500px] overflow-y-scroll">
        {chatMessage.map((chat, index) => (
          <ChatMessage name={chat.name} message={chat.message} key={index} />
        ))}
      </div>
    </div>
  );
};

export default LiveChat;
