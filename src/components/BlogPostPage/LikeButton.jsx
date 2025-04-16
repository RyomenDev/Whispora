import React, { useState } from "react";
import { Heart } from "lucide-react";

const LikeButton = ({ postId, likeCount }) => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(likeCount);

  const toggleLike = () => {
    setLiked(!liked);
    setCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="flex items-center gap-2 mb-6">
      <button
        onClick={toggleLike}
        className={`text-red-500 transition ${
          liked ? "scale-125" : "scale-100"
        }`}
      >
        <Heart fill={liked ? "currentColor" : "none"} />
      </button>
      <span>{count}</span>
    </div>
  );
};

export default LikeButton;
