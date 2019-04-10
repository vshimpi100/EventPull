const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// NEED TO FIGURE OUT PASSWORD AND USER STORAGE LINKED TO EXTERNAL OAUTH CIENT - SEE BELOW

const userSchema = new Schema({
  // User metadata created without user direct input
  // User will have an id: _id property by default

  // these attributes are based purely on the User creation
  created: { type: Date, default: Date.now, required: true }, // the time the User was created
  isPrivate: { type: Boolean, default: false, required: true }, // means only the User and friends can see their profile

  // User properties created by user - we may be able to store this in an Auth0 database or AWS congnito tied DB
  // required
  username: { type: String, required: true, unique: true}, // the username of the User, will need validation, but must be unique
  password: {type: String, required: true}, // we will need to link to password somehow, not sure how, using AWS Cognito
  name: { type: String, required: true, minlength: 3, maxlength: 70 }, // the name of the User
  email: { type: String, required: true}, // user email, will have to validate on front end

  // not required
  phone: { type: Number, required: false, minlength: 10, maxlength: 11 }, // short paragraph describing the User
  birthday: {type: Date, default: Date.now, required: false}, // birthdate of user, not required
  image: {
    type: mongoose.SchemaTypes.Url,
    required: true,
    default: "https://via.placeholder.com/150x150?text=Image+Not+Found"
  }, // link to an image of the user

  // Linked data to the user
  niches: [{ type: Schema.Types.ObjectId, ref: "User", required: true }], // the niches the user follows
  events: [{ type: Schema.Types.ObjectId, ref: "Event", required: true }], // the events the user has posted
  saved: [{ type: Schema.Types.ObjectId, ref: "Event", required: true }], // the events the user has saved
  friends: [{ type: Schema.Types.ObjectId, ref: "User", required: false }], // the friends of the user
  // if the User is private, only friends can view their profiles, otherwise anyone can see their profile

  // If the user is an affiliate
  isAffiliate: {type: Boolean, required: true, default: false}, // determines whether the user is an affiliate
  apiKey: {type: Boolean, required: true, default: false}, // if the user is an affiliate, this would be their API key
  affiliateData: {type: String, required: false}, // will store a stringified result of the affiliate's data
  // WILL NEED TO FIGURE OUT HOW THIS TIES TO CLICKMETER

  // If the user is a business
  isBusiness: {type: Boolean, required: true, default: false}, // determines whether the user is a business
  apiKey: {type: Boolean, required: true, default: false}, // if the user is a business, this would be their API key
  businessData: {type: String, required: false} // will store a stringified result of the business's scraping data
  // WILL NEED TO FIGURE OUT HOW THIS TIES TO CLICKMETER

});

const User = mongoose.model("User", userSchema);

module.exports = User;