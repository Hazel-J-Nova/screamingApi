const { Router } = require('express');
const post = require('../controllers/post');
const catchAsync = require('../utils/catchAsync');

Router.route('/post/:postId')
  .get(catchAsync, post.getPost)
  .post(catchAsync, post.createPost)
  .put(catchAsync, post.updatePost)
  .delete(catchAsync, post.deletePost);

module.exports.Router;
