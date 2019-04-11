const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const nicheSchema = new Schema({
  // Niche metadata created without user direct input
  // Niche will have an id: _id property by default

  // Popularity and hotness calculations
  // these attributes will be fed into the calculation for Niche popularity on api call
  totalScore: { type: Number, default: 0, required: true }, // the average score of the total posts of the niche
  totalVotes: { type: Number, default: 0, required: true }, // the total number of votes of the total posts of the niche
  totalPosts: { type: Number, default: 0, required: true }, // the number of total posts
  totalSaves: { type: Number, default: 0, required: true }, // the number of posts saved ever
  totalComments: { type: Number, default: 0, required: true }, // the number of comments ever
  // the calculation will also be based on the total number of members of the niche

  // these attributes will be fed into the calculation for Niche hotness (recent means in the last day) on api call
  recentScore: { type: Number, default: 0, required: true }, // the average score of the recent posts of the niche
  recentVotes: { type: Number, default: 0, required: true }, // the total number of votes of the recent posts of the niche
  recentPosts: { type: Number, default: 0, required: true }, // the number of recent posts
  recentSaves: { type: Number, default: 0, required: true }, // the number of posts saved recently
  recentComments: { type: Number, default: 0, required: true }, // the number of comments over the past day
  // the calculation will also be based on the total number of recent members of the niche

  // these attributes are based purely on the Niche creation
  creator: { type: Schema.Types.ObjectId, ref: "User", required: true }, // the creator of the Niche
  parent: { type: Schema.Types.ObjectId, ref: "Niche", required: true }, // the niche to which this Niche is a child
  children: { type: Schema.Types.ObjectId, ref: "Niche", required: false }, // the niches to which this niche is a parent
  created: { type: Date, default: Date.now, required: true }, // the time the Niche was created

  // Niche properties created by user
  name: { type: String, required: true, minlength: 3, maxlength: 70 }, // the name of the Niche or post for Niche
  description: { type: String, required: false, minlength: 3, maxlength: 400 }, // short paragraph describing the Niche
  image: {
    type: mongoose.SchemaTypes.Url,
    required: true,
    default: "https://via.placeholder.com/600x150?text=Image+Not+Found"
  }, // link to an image for the niche header
  tags: [{
    type: String,
    required: false,
    validate: [val => val.length <= 10, '{PATH} exceeds the limit of 10'], // users can only set 10 tags maximum
  }], // tags are set by the niche creator to tell users what the niche pertains to
  isPrivate: { type: Boolean, default: false, required: true }, // means the Niche will only be visible to moderators and members

  // Moderators and Members
  moderators: [{ type: Schema.Types.ObjectId, ref: "User", required: true }], // the moderators of the Niche
  members: [{ type: Schema.Types.ObjectId, ref: "User", required: false }], // the members of the Niche
  // if the niche is private, only members can view posts, otherwise the niche members are anyone that follows it
  // if the niche is private, moderators can approve members
  pendingMembers: [{ type: Schema.Types.ObjectId, ref: "User", required: false }] // pending members are those that moderators have not approved yet

});

// const arrayLimit = val => val.length <= 10;

const Niche = mongoose.model("Niche", nicheSchema);

module.exports = Niche;
