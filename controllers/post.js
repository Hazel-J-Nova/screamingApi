const Post = require('../Models/Posts');

module.exports.getPost = async (req, res) => {
  const postId = req.params;
  const post = await Post.findById(postId);
  res.json(post);
};
