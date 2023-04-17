import React, { useState, useEffect } from "react";
import CommentsCard from "./CommentsCard";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [userName, setUsername] = useState([]);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const [blogId, setBlogId] = useState(urlParams.get("blogId"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/addComment", {
      method: "POST",
      body: JSON.stringify({
        comment,
        blogId,
      }),
      headers: { "Content-type": "application/json" },
    });
    setComment("");
    setBlogId(blogId); // update blogId to trigger useEffect hook
    fetchData();
  };

  const handleDelete=async (commentId)=>{
    const response = await fetch("/deleteComments", {
      method: "POST",
      body: JSON.stringify({
        commentId,
        blogId,
      }),
      headers: { "Content-type": "application/json" },
    });
    setBlogId(blogId); // update blogId to trigger useEffect hook
    fetchData();
  }
  const fetchData = async () => {
    const response = await fetch("/getComments", {
      method: "POST",
      body: JSON.stringify({
        blogId,
      }),
      headers: { "Content-type": "application/json" },
    });
    const json = await response.json();
    // console.log(json.array);
    if (json) {
      setComments(json.comments);
      setUsername(json.array);
    }
  };

  useEffect(() => {
    
    fetchData();
  }, [blogId]);

  return (
    <div className="w-full flex rounded-md p-3 gap-2 bg-slate-300/40 dark:bg-slate-800/40 backdrop-blur-md text-slate-800 flex-col dark:text-slate-200">
      <h1 className="text-3xl font-bold mb-8">Comments</h1>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul className="w-full flex flex-col gap-2">
          {comments.map((comment, index) => (
            <li key={comment._id}>
              <CommentsCard key={comment._id} owner={userName[index]} text={comment.text}/>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit} className="mt-8">
        <h2 className="text-lg font-medium mb-4">Leave a comment</h2>
        <div className="mb-4">
          <textarea
            id="comment"
            name="comment"
            value={comment}
            placeholder="Add your Thoughts ..."
            onChange={(e) => setComment(e.target.value)}
            className="bg-white dark:bg-slate-800 outline-none px-4 py-2 rounded-md w-full"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Comments;
