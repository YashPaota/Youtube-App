import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
    return(
        <div className="flex relative top-[68px]">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Body;