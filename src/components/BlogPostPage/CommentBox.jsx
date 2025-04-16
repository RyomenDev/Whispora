import React, { useState } from "react";

const CommentBox = ({ postId }) => {
  const [comments, setComments] = useState([
    { name: "John", text: "Loved this post!" },
    { name: "Jane", text: "Very informative!" },
  ]);
  const [input, setInput] = useState("");

  const handleAddComment = () => {
    if (!input.trim()) return;
    setComments([...comments, { name: "You", text: input }]);
    setInput("");
    // Send to backend
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Comments</h3>
      <div className="space-y-3 mb-4">
        {comments.map((c, i) => (
          <div key={i} className="bg-gray-100 p-2 rounded-md">
            <p className="font-bold text-sm">{c.name}</p>
            <p className="text-sm">{c.text}</p>
          </div>
        ))}
      </div>
      <textarea
        rows="3"
        className="w-full border p-2 rounded-md"
        placeholder="Add a comment..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button
        onClick={handleAddComment}
        className="mt-2 px-4 py-1 bg-emerald-500 text-white rounded hover:bg-emerald-600"
      >
        Post
      </button>
    </div>
  );
};

export default CommentBox;
