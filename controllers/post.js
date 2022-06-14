const Post = require('../Models/Posts');

module.exports.getPost = async (req, res) => {
  const postId = req.params;
  const post = await Post.findById(postId);
  res.json(post);
};

module.exports.createPost = async (req, res) => {
  const like = 0;
  const { user, postNumber, pageNumber } = req.body;
  const newPost = await new Post(postNumber, pageNumber, like);
  newPost.user.push(user);
  await user.save();
  res.send(newPost);
};

module.exports.updatePost = async (req, res) => {
  const { numbers, user } = req.body;
  const postId = req.params;
  const post = await Post.findByIdAndUpdate(postId, { likes: likes - numbers });
  if (number === 1) {
    post.users.push(user);
  } else {
    const userIndex = post.user.findIndex(user);
    if (!userIndex === -1) {
      post.user.slice(userIndex, userIndex);
    }
  }
  await post.save();
  res.json(post.likes);
};

module.exports.deletePost = async (req, res) => {
  const postId = req.params;
  const post = await Post.findByIdAndDelete(postId);
  res.json(post);
};
