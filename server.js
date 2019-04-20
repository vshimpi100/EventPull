const express = require("express");
const app = require("express")();
const stripe = require("stripe")("pk_live_gmvxptJnsikKxHF7Gt8EWBky00Ikgd4Mis");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Helmet HTTP protection
const helmet = require('helmet');
app.use(helmet());

app.use(require("body-parser").text());

// We have the option to use Morgan for logging, but using AWS Cloudwatch will be better

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB and Stripe
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/eventpull", { useNewUrlParser: true });
app.listen(9000, () => console.log("Listening on port 9000"));

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});