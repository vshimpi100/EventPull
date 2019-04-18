const router = require("express").Router();
const userRoutes = require("./users");
const nicheRoutes = require("./niches");
const eventRoutes = require("./events");
const commentRoutes = require("./comments");
const docsRoutes = require("./docs");

// API routes
router.use("/docs", docsRoutes);
router.use("/e", eventRoutes);
router.use("/n", nicheRoutes);
router.use("/u", userRoutes);
router.use("/c", commentRoutes);
router.use("/", function(req, res) {
  res.send("Hello World!");
});

module.exports = router;
