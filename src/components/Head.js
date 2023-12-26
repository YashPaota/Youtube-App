import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import {
  HAMBURGER_ICON,
  PROFILE_ICON,
  YOTUBE_SEARCH_API,
  YOUTUBE_ICON,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const  searchCache = useSelector(store => store.search);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200); //Debouncing

    return () => clearTimeout(timer); // clearing timeout
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    //update cache
    dispatch(cacheResults({
      [searchQuery] : json[1],
    }))
  };

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

      <div className="col-span-10 ml-[10rem] mt-2">
        <div>
          <input
            className="px-5 w-1/2  border border-gray-400 p-1 rounded-l-full "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-1 px-4 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="w-[31rem] fixed bg-white py-2 px-2 rounded-lg shadow-2xl border border-gray-100 ">
            <ul>
              {suggestions.map((s, index) => (
                <li
                  key={index}
                  className="py-2 shadow-sm hover:bg-gray-100 px-3 "
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-8 mt-2" src={PROFILE_ICON} alt="user-icon-logo" />
      </div>
    </div>
  );
};

export default Head;
