const VideoCard = ({ info }) => {
//   console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 mx-5  my-4 w-80 h-80 shadow-md rounded-md hover:shadow-slate-400">
      <img className="rounded-lg " src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-semibold py-2">{title.substring(0,60)}</li>
        <li className="text-gray-500 font-medium text-sm">{channelTitle}</li>
        <li className="text-sm  text-gray-500 font-medium">{parseInt(statistics.viewCount / 10000)}K views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
