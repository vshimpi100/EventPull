const mongoose = require("mongoose");
require('mongoose-type-url');
require('mongoose-currency').loadType(mongoose);

const Schema = mongoose.Schema;

const eventSchema = new Schema({

  // Event metadata created without user direct input
  // event will have an id: _id property by default

  // Attributes used for Event Score calculation
  // these attributes will be fed into the calculation for event score, which will be calculated on api call
  up: {type: Number, default: 0, required: true}, // the up votes for the event
  down: {type: Number, default: 0, required: true}, // the down votes for the event
  saves: {type: Number, default: 0, required: true}, // the number of users that have saved this event
  // the last item that will be fed into the algorithm is the number of comments

  // these attributes are based purely on the event creation
  creator: { type: Schema.Types.ObjectId, ref: "User", required: true }, // the creator of the event
  niche: { type: Schema.Types.ObjectId, ref: "Niche", required: true }, // the niche to which the post was posted
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment", required: true }], // the comments pertaining to this post
  created: { type: Date, default: Date.now, required: true }, // the time the event was created

  // Event properties created by user
  title: { type: String, required: true, minlength: 3, maxlength: 140}, // the name of the event or post for event
  price: { type: mongoose.Types.Currency, required: true, min: 0, max: 10000000 }, // the price of the event or event ticket
  description: { type: String, required: false, minlength: 3, maxlength: 400}, // short paragraph describing the event
  location: { type: String, required: false}, // this will be the location saved if the user does not use Google autocomplete (ie scraper)
  locationGoogle: { type: String, required: false}, // this will be saved as a place using Google Maps Autocomplete if the user opts for it, and will be the place_id field specifically
  date: { type: Date, required: true, min: Date.now, default: Date.now}, // the date of the event
  image: { type: mongoose.SchemaTypes.Url, required: true, default: 'https://via.placeholder.com/300x300?text=Image+Not+Found'}, // link to an image of the event
  link: { type: mongoose.SchemaTypes.Url, required: true, default: 'https://eventpull.com'}, // link to event main page
  tickets: { type: mongoose.SchemaTypes.Url, required: false}, // link to event tickets page
  isNicheRestricted: { type: Boolean, default: false, required: true }, // allows the event to be posted only to its niche, and not appear in parent niches

  // Event properties acted upon by moderators
  isHidden: { type: Boolean, default: false, required: true }, // allows the event to be "removed" by niche moderators
  hiddenReason: { type: String, required: false}, // allows moderators to provide a reason why the post was removed
  reports: [{ type: String, required: false}] // allows users to report posts for inappropriateness

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
