import { useState } from "react";
import videoData from "../data/video.js";
import Comments from "./Comments.jsx";
import VideoDetails from "./VideoDetails.jsx";

function App() {
  const [showComments, setShowComments] = useState(true);
  const [video, setVideo] = useState(videoData);
  const handleShowCommentsClick = () => setShowComments(prev => !prev);
  const handleUpvoteClick = () => setVideo({ ...video, upvotes: video.upvotes + 1 });
  const handleDownvoteClick = () => setVideo({ ...video, downvotes: video.downvotes + 1 });

  return (
    <div className="App">
      <VideoDetails
        {...video}
        showComments={showComments}
        onShowCommentsClick={handleShowCommentsClick}
        onUpvoteClick={handleUpvoteClick}
        onDownvoteClick={handleDownvoteClick}
      />
      {showComments && <Comments comments={video.comments} />}
    </div>
  );
}

export default App;
