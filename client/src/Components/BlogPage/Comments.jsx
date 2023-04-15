import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    axios.get('/comments')
      .then(res => setComments(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/comments', { name, email, comment })
      .then(res => {
        setComments([...comments, res.data]);
        setName('');
        setEmail('');
        setComment('');
      })
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete(`/comments/${id}`)
      .then(res => {
        setComments(comments.filter(comment => comment._id !== id));
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Comments</h1>

      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul className="space-y-4">
            
          {comments.map(comment => (
            <li key={comment._id}>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="text-lg font-medium mb-2">{comment.name}</h2>
                <p className="text-gray-600 mb-4">{comment.comment}</p>
                <button onClick={() => handleDelete(comment._id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit} className="mt-8">
        <h2 className="text-lg font-medium mb-4">Leave a comment</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} className="border border-gray-300 px-4 py-2 rounded-lg w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} className="border border-gray-300 px-4 py-2 rounded-lg w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block font-medium mb-2">Comment</label>
          <textarea id="comment" name="comment" value={comment} onChange={e => setComment(e.target.value)} className="border border-gray-300 px-4 py-2 rounded-lg w-full" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Comments;
