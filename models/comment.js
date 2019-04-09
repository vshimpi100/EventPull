const mongoose = require("mongoose");
require('mongoose-type-url');

const Schema = mongoose.Schema;

const commentSchema = new Schema({

  // Event metadata
  // event will have an id: _id property by default
  creator: { type: Schema.Types.ObjectId, ref: "User", required: true }, // the creator of the event
  niche: { type: Schema.Types.ObjectId, ref: "Niche", required: true }, // the niche to which the post was posted
  comments: { type: Schema.Types.ObjectId, ref: "Comment", required: true }, // the comments pertaining to this post
  created: { type: Date, default: Date.now, required: true },

  // Event properties
  title: { type: String, required: true, minlength: 3, maxlength: 140}, // the name of the event or post for event
  description: { type: String, required: false, minlength: 3, maxlength: 400}, // short paragraph describing the event
  location: { type: String, required: false}, // this will be saved as a place using Google Maps Autocomplete, and will be the place_id field specifically
  date: { type: Date, required: true, min: Date.now, default: Date.now}, // the date of the event
  image: { type: mongoose.SchemaTypes.Url, required: true, default: 'https://via.placeholder.com/300x300?text=Image+Not+Found'}, // link to an image of the event
  link: { type: mongoose.SchemaTypes.Url, required: true, default: 'https://eventpull.com'}, // link to event main page
  tickets: { type: mongoose.SchemaTypes.Url, required: false}, // link to event tickets page
  
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
