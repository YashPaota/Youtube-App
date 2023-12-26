import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";
import CommentsSection from "./CommentsSection";

const WatchPage = () => {
  const [setParams] = useSearchParams();
  const videoID = setParams.get("v");
  // console.log(setParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [videoID]);
  return (
    <div className="px-5">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + videoID }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <VideoInfo />
      <CommentsSection />
    </div>
  );
};

export default WatchPage;
