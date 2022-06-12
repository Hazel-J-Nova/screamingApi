const Post = require('../Models/Posts');

module.exports.getPost = async (req, res) => {
  const postId = req.params;
  const post = await Post.findById(postId);
  res.json(post);
};

module.exports.createPost = async (req, res) => {
  const like = 0;
  const { user, postNumber, pageNumber } = req.body;
  const newPost = await new Post(user, postNumber, pageNumber, like);
  res.send(newPost);
};

module.exports.updatePost = async (req, res) => {
  const { number } = req.body;
  const postId = req.params;
  const post = await Post.findByIdAndUpdate(postId, { likes: likes - numbers });
  await post.save();
  res.json(post.likes);
};
