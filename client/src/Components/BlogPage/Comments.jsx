import React, { useState, useEffect } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [userName, setUsername] = useState([]);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const blogId = urlParams.get("blogId");

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
  }

  useEffect(() => {
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
    fetchData();
  }, [blogId]);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Comments</h1>

      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((comment, index) => (
            <li key={comment._id}>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="text-lg font-medium mb-2">{userName[index]}</h2>
                <p className="text-gray-600 mb-4">{comment.text}</p>
                
                <button onClick={() => handleDelete(comment._id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit} className="mt-8">
        <h2 className="text-lg font-medium mb-4">Leave a comment</h2>
        <div className="mb-4">
          <label htmlFor="comment" className="block font-medium mb-2">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg w-full"
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
