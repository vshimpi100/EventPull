const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const nicheSchema = new Schema({

  // Niche metadata created without user direct input
  // Niche will have an id: _id property by default

  // these attributes will be fed into the calculation for Niche popularity (recent means in the last week)
  recentScore: {type: Number, default: 0, required: true}, // the average score of the recent posts of the niche
  recentVotes: {type: Number, default: 0, required: true}, // the total number of votes of the recent posts of the niche
  recentPosts: {type: Number, default: 0, required: true}, // the number of recent posts
  recentSaves: {type: Number, default: 0, required: true}, // the number of posts saved recently
  recentComments: {type: Number, default: 0, required: true}, // the number of comments over the past week
  // the calculation will also be based on the total number of followers of the niche

  // these attributes are based purely on the Niche creation
  creator: { type: Schema.Types.ObjectId, ref: "User", required: true }, // the creator of the Niche
  niche: { type: Schema.Types.ObjectId, ref: "Niche", required: true }, // the niche to which the post was posted
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment", required: true }], // the comments pertaining to this post
  created: { type: Date, default: Date.now, required: true }, // the time the Niche was created

  // Niche properties created by user
  title: { type: String, required: true, minlength: 3, maxlength: 140}, // the name of the Niche or post for Niche
  price: { type: mongoose.Types.Currency, required: true, min: 0, max: 10000000 }, // the price of the Niche or Niche ticket
  description: { type: String, required: false, minlength: 3, maxlength: 400}, // short paragraph describing the Niche
  location: { type: String, required: false}, // this will be saved as a place using Google Maps Autocomplete, and will be the place_id field specifically
  date: { type: Date, required: true, min: Date.now, default: Date.now}, // the date of the Niche
  image: { type: mongoose.SchemaTypes.Url, required: true, default: 'https://via.placeholder.com/300x300?text=Image+Not+Found'}, // link to an image of the Niche
  link: { type: mongoose.SchemaTypes.Url, required: true, default: 'https://Nichepull.com'}, // link to Niche main page
  tickets: { type: mongoose.SchemaTypes.Url, required: false}, // link to Niche tickets page
  isNicheRestricted: { type: Boolean, default: false, required: true }, // allows the Niche to be posted only to its niche, and not appear in parent niches

  // Niche properties acted upon by moderators
  isHidden: { type: Boolean, default: false, required: true }, // allows the Niche to be "removed" by niche moderators
  hiddenReason: { type: String, required: false} // allows moderators to provide a reason why the post was removed
  
});

const Niche = mongoose.model("Niche", nicheSchema);

module.exports = Niche;
