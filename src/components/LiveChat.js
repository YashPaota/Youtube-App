import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage } from "../utils/constants";
import { generateRandomName } from "../utils/constants";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState();

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
    <div className="">
      <div className=" p-5 flex flex-col-reverse top-10 ml-6  border border-black  bg-slate-100 rounded-lg w-[320px] h-[450px] overflow-y-scroll">
        {chatMessage.map((chat, index) => (
          <ChatMessage name={chat.name} message={chat.message} key={index} />
        ))}
      </div>

      <form
        className="ml-6 p-2 mt-2 w-[320px] border border-black rounded"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:"Paota",
            message: liveMessage,
          }))

          setLiveMessage("");
        }}
      >
        <input
          className="w-[220px] px-2 py-1 border border-gray-200"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="bg-gray-600 text-white w-16 px-2 mx-2 py-1 rounded-md">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
