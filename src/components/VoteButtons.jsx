export default function VoteButton({ upvotes, downvotes, onUpvoteClick, onDownvoteClick }) {
  return (
    <div className="vote-buttons">
      <button onClick={onUpvoteClick}>{upvotes} 👍</button>
      <button onClick={onDownvoteClick}>{downvotes} 👎</button>
    </div>
  )
}