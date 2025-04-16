import React, { useState } from "react";

const initialComments = [
  {
    id: 1,
    name: "Adamsdavid",
    time: "20 hours ago",
    text: "I genuinely think that WishPora's community is AMAZING...",
    votes: 2,
    replies: [
      {
        id: 2,
        name: "Saramay",
        time: "16 hours ago",
        text: "I agree. I’ve been coding really well (pun intended)...",
        votes: 5,
        replies: [
          {
            id: 3,
            name: "Jessica21",
            time: "14 hours ago",
            text: "Okay, this comment wins.",
            votes: 5,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Andrew231",
    time: "20 hours ago",
    text: "Thanks for making this, super helpful",
    votes: 2,
    replies: [],
  },
];

const Comment = ({ comment, depth = 0 }) => {
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if (!replyText.trim()) return;
    setShowReply(false);
    alert(`Replying to "${comment.name}": ${replyText}`);
    setReplyText("");
  };

  return (
    <div className={`ml-${depth * 4} mt-4`}>
      <div className="flex items-start gap-3">
        <img
          src={`https://i.pravatar.cc/40?u=${comment.name}`}
          alt={comment.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="text-sm font-semibold">{comment.name}</div>
          <div className="text-xs text-gray-500 mb-1">{comment.time}</div>
          <p className="text-sm mb-2">{comment.text}</p>

          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <button className="hover:text-emerald-500">↑</button>
              {comment.votes}
              <button className="hover:text-emerald-500">↓</button>
            </span>
            <button onClick={() => setShowReply(!showReply)}>Reply</button>
            <button>Report</button>
          </div>

          {showReply && (
            <div className="mt-2">
              <textarea
                rows="2"
                className="w-full border rounded-md p-2 text-sm"
                placeholder={`Reply to ${comment.name}...`}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
              <button
                onClick={handleReply}
                className="mt-1 px-3 py-1 bg-emerald-500 text-white rounded text-sm hover:bg-emerald-600"
              >
                Post Reply
              </button>
            </div>
          )}

          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-2">
              {comment.replies.map((reply) => (
                <Comment key={reply.id} comment={reply} depth={depth + 1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CommentBox = () => {
  const [comments, setComments] = useState(initialComments);
  const [input, setInput] = useState("");

  const handleAddComment = () => {
    if (!input.trim()) return;

    const newComment = {
      id: Date.now(),
      name: "You",
      time: "Just now",
      text: input,
      votes: 0,
      replies: [],
    };

    setComments([...comments, newComment]);
    setInput("");
  };

  return (
    <div className="p-4 shadow rounded bg-gray-100">
      <h3 className="text-xl font-semibold mb-4">Comments</h3>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <div className="mt-6">
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
    </div>
  );
};

export default CommentBox;
