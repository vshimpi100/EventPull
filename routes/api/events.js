const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/e"
router.route("/")
  .get(eventsController.findAll)
  .post(eventsController.create);

// Matches with "/api/e/:sort"
router.route("/:sort/:order")
  .get(eventsController.findBySort)

// Matches with "/api/e/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .put(eventsController.updateVotes)
  .delete(eventsController.remove);

module.exports = router;
