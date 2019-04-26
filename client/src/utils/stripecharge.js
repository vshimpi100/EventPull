// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("pk_test_qZyMF8Y7CJanasgzsG4U0OqM00YJXKuE18");

stripe.charges.create({
  amount: 1000,
  currency: "usd",
  source: "tok_visa",
  transfer_data: {
    destination: "{CONNECTED_STRIPE_ACCOUNT_ID}",
  },
}).then(function(charge) {
  // asynchronously called
});