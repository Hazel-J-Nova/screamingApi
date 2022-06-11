const mongoose = require('mongoose');
const Schema = mongooose.Schema;

const PostSchema = new Schema({
  like: { type: Number, default: true },
  users: [String],
});

module.exports = mongoose.model('Post', PostSchema);
