const mongoose = require('mongoose');
const Schema = mongooose.Schema;

const PostSchema = new Schema({
  like: { type: Number, default: 0 },
  users: [String],
  pageNumber: { type: Number },
});

module.exports = mongoose.model('Post', PostSchema);
