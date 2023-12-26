import Comment from "./components/Comment";

const CommentsList = ({comments}) => {
  return (
    <div>
        {comments.map((comment, index) => (
            <div key={index}>
            <Comment data={comment}  />
            <div className="ml-5 border border-l-black">
              <CommentsList comments={comment.replies} />

            </div>
            </div>
        ))}
        
    </div>
  )
}

export default CommentsList;