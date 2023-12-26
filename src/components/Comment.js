import { PROFILE_ICON } from "../utils/constants";

const Comment = ({data}) => {
    const{name , text} = data;
  return (
    <div className="flex bg-gray-200 shadow-sm rounded-md p-2 m-2">
        <img className="h-12 w-12 ml-2" src={PROFILE_ICON} alt="PROFILE" />
        <div className="ml-4">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment;