import Comment from "./Comment";


import CommentsList from "../CommentsList";
import { commentArray } from "../utils/constants";

const CommentsSection = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentArray} />
    </div>
  );
};

export default CommentsSection;
