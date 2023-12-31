import { useSelector } from "react-redux";
import SidebarOption from "./SidebarOption";
// import { Link } from "react-router-dom";
import { BOTTOM_SECTION, EXPLORE, SIDEBAR_OPTIONS, YOU, YOUTUBE_PRODUCTS } from "../utils/constants";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null; //This is called as early return method
  // we can also do or use ternary operator.
  return (
    <div className="p-5 shadow-lg w-2/12 border-r-2 border-gray-200 ">
      {SIDEBAR_OPTIONS?.map((items, index) => (
        <SidebarOption name={items.name} icon={items.icon} key={index} />
      ))}

      <div className="border border-b-1 mt-2"></div>

      <h1 className="font-semibold text-lg m-4">You   &gt;</h1>
      {YOU?.map((items, index) => (
        <SidebarOption name={items.name} icon={items.icon} key={index} />
      ))}
      <div className="border border-b-1 mt-2"></div>

      {YOUTUBE_PRODUCTS?.map((items, index) => (
        <SidebarOption name={items.name} icon={items.icon} key={index} />
      ))}
      <div className="border border-b-1 mt-2"></div>

      {EXPLORE?.map((items, index) => (
        <SidebarOption name={items.name} icon={items.icon} key={index} />
      ))}
      <div className="border border-b-1 mt-2"></div>


      {BOTTOM_SECTION?.map((items, index) => (
        <SidebarOption name={items.name} icon={items.icon} key={index} />
      ))}
      <div className="border border-b-1 mt-2"></div>

      

    </div>
  );
};

export default Sidebar;

{
  /* <ul>
                <li className="font-semibold cursor-pointer"><Link to="/">Home</Link></li>
                <li className="font-semibold">Shorts</li>
                <li className="font-semibold">Subscriptions</li>
                
            </ul>
            <h1 className="font-bold pt-5 ">You  </h1>
            <ul>
                <li>Your Channel </li>
                <li>History</li>
                <li>Your Videos</li>
                <li>Watch Later</li>
            </ul>
            <h1 className="font-bold pt-5 ">Explore </h1>
            <ul>
                <li>Trending </li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Movies</li>
                <li>Live</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Sports</li>
                <li>Learning</li>
                <li>Podcasts</li>
                <li>Fashion</li>
            </ul> */
}
