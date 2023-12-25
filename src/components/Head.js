import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { HAMBURGER_ICON, PROFILE_ICON, YOUTUBE_ICON } from "../utils/constants";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-1 shadow-lg">
      <div className="flex col-span-1">
      
          <img
            onClick={() => toggleMenuHandler()}
            className="h-8 mt-2 cursor-pointer"
            src={HAMBURGER_ICON}
            alt="Menu-logo"
          />
      

        <img className="h-12 w-28 mx-2" src={YOUTUBE_ICON} alt="Youtube-logo" />
      </div>

      <div className="col-span-10 text-center mt-2">
        <input
          className="w-1/2 border border-gray-400 p-1 rounded-l-full "
          type="text"
        />
        <button className="border border-gray-400 p-1 px-4 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8 mt-2" src={PROFILE_ICON} alt="user-icon-logo" />
      </div>
    </div>
  );
};

export default Head;
