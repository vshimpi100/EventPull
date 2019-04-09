const router = require("express").Router();
const userRoutes = require("./users");
const nicheRoutes = require("./niches");
const eventRoutes = require("./events");
const commentRoutes = require("./comments");

// API routes
router.use("/e", eventRoutes);
router.use("/n", nicheRoutes);
router.use("/u", userRoutes);
router.use("/c", commentRoutes);

module.exports = router;
