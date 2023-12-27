import { PROFILE_ICON, generateProfileImage, generateRandomMessage, generateRandomName } from "../utils/constants";

const Comment = ({data}) => {
    const{name , text} = data;
  return (
    <div className="flex bg-gray-200 shadow-sm rounded-md p-2 m-2">
        <img className="h-12 w-12 ml-2 rounded-full" src={generateProfileImage()} alt="PROFILE" />
        <div className="ml-4">
            <p className="font-bold">{generateRandomName()}</p>
            <p>{generateRandomMessage()}</p>
        </div>
    </div>
  )
}

export default Comment;