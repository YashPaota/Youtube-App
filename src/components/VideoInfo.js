import { useEffect, useState } from "react";
import { PROFILE_ICON, VIDEO_INFO_URL } from "../utils/constants";
import LikeDarkIcon from "../utils/images/like-dark.png";
import { useSearchParams } from "react-router-dom";

const VideoInfo = () => {
  const [videoData, setVideoData] = useState([]);
  const[searchParam] = useSearchParams();
  const videoID = searchParam.get('v'); //to get id after v


  useEffect(() => {
    getVideoInfo();
  }, [videoID]);

  const getVideoInfo = async () => {
    const data = await fetch(VIDEO_INFO_URL + "&id=" + videoID);
    const json = await data.json();
    setVideoData(json.items[0]);
    console.log(json.items[0]);
  };
  return (
    <div className="flex flex-col ">
      <h1 className="m-2 font-bold w-full text-xl">
        {videoData?.snippet?.title}
      </h1>
      <div className="flex">
        <div className="flex">
          <img className="w-12 h-12" alt="PROFILE_ICON" src={PROFILE_ICON} />
          <div className="flex flex-col mx-4">
            <h2 className="font-bold">{videoData?.snippet?.channelTitle}</h2>
            <h5 className="text-gray-500 font-thin text-sm">6M Subscribers</h5>
          </div>
          <button className="bg-black text-white rounded-full px-6 h-10 ml-10">
            Subscribe
          </button>
        </div>

        <div>
        <h2 className="flex">
          <button className="flex justify-center items-center ml-8 h-9 bg-gray-100 font-semibold text-black rounded-full px-4 py-0">
            <img className="h-5 w-5 mr-2" src={LikeDarkIcon} alt="" />
            <span className="mr-2">{videoData?.statistics?.likeCount}</span>
            <span className="mr-2">|</span>
            <img
              className="h-5 w-5 mr-2 rotate-180 mt-1"
              src={LikeDarkIcon}
              alt=""
            />
          </button>
          <button className="ml-4 h-9 bg-gray-100 font-semibold text-black rounded-full  px-6 py-0">
            Share
          </button>
          <button className="ml-4 h-9 bg-gray-100 font-semibold text-black rounded-full  px-6 py-0">
            Save
          </button>
          <button className="ml-4 h-9 bg-gray-100 font-semibold text-black rounded-full  px-6 py-0">
            ...
          </button>
        </h2>
      </div>


      </div>

      

      <div className="flex flex-col bg-gray-100 rounded-lg p-4 mt-3 w-[900px]">
        <div className="flex font-semibold">
          <h2>{videoData?.statistics?.viewCount / 100}K views</h2>
          <h2 className="ml-4">#hashtags #trending #india</h2>
        </div>
        <div className="h-[150px]  text-ellipsist overflow-y-scroll scrollbar-hide">
          {videoData?.snippet?.description}
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
