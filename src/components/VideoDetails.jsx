import { useState } from "react"
import Video from "./Video"
import VoteButton from "./VoteButtons"

export default function VideoDetails({ embedUrl, title, views, createdAt, upvotes, downvotes, showComments, onShowCommentsClick, onUpvoteClick, onDownvoteClick }) {

  return (
    <div className='video-details'>
      <Video embedUrl={embedUrl} />
      <h1>{title}</h1>
      <p>{`${views} Views | Uploaded ${createdAt}`}</p>
      <VoteButton upvotes={upvotes} downvotes={downvotes} onDownvoteClick={onDownvoteClick} onUpvoteClick={onUpvoteClick} />
      <button onClick={onShowCommentsClick}>{showComments ? "Hide" : "Show"} Comments</button>
      <hr />
    </div>
  )
}