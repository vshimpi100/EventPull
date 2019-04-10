const mongoose = require("mongoose");
require('mongoose-type-url');

const Schema = mongoose.Schema;

const commentSchema = new Schema({

  // Comment metadata
  // Comment will have an id: _id property by default
  creator: { type: Schema.Types.ObjectId, ref: "User", required: true }, // the creator of the Comment
  event: { type: Schema.Types.ObjectId, ref: "Event", required: true }, // the event to which the comment was posted
  parent: { type: Schema.Types.ObjectId, ref: "Comment", required: false }, // the parent of this comment
  children: { type: Schema.Types.ObjectId, ref: "Comment", required: false }, // the comments under this comment
  created: { type: Date, default: Date.now, required: true }, // the time the event was created

  // Attributes used for Comment Score calculation
  // these attributes will be fed into the calculation for Comment score, which will be calculated on api call
  up: {type: Number, default: 0, required: true}, // the up votes for the Comment
  down: {type: Number, default: 0, required: true}, // the down votes for the Comment
  // the last item that will be fed into the algorithm is the number of children comments

  // Comment properties
  text: { type: String, required: true, minlength: 3, maxlength: 1000}, // the text of the comment

  // Comment properties acted upon by moderators
  isHidden: { type: Boolean, default: false, required: true }, // allows the event to be "removed" by niche moderators
  hiddenReason: { type: String, required: false}, // allows moderators to provide a reason why the post was removed
  reports: [{ type: String, required: false}] // allows users to report comments for inappropriateness

});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
