const Comment = require('../models/comment_model');

exports.getComments = (req, res) => {
  Comment.find({}, (err, comments) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(comments);
    }
  });
};

exports.addComment = (req, res) => {
  const { name, email, comment } = req.body;

  const newComment = new Comment({
    name,
    email,
    comment
  });

  newComment.save((err, comment) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(201).send(comment);
    }
  });
};

exports.deleteComment = (req, res) => {
  const { id } = req.params;

  Comment.findByIdAndDelete(id, (err, comment) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(comment);
    }
  });
};
