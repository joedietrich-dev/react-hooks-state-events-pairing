import Comment from "./Comment"

export default function Comments({ comments }) {
  const commentList = comments.map(comment => <Comment key={comment.id} {...comment} />)
  return (
    <div className="comments">
      <h2>{comments.length === 1 ? '1 Comment' : `${comments.length} Comments`}</h2>
      {commentList}
    </div>
  )
}