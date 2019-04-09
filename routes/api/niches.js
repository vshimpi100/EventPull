const router = require("express").Router();
const nichesController = require("../../controllers/nichesController");

// Matches with "/api/n"
router.route("/")
  .get(nichesController.findAll)
  .post(nichesController.create);

// Matches with "/api/n/:id"
router
  .route("/:id")
  .get(nichesController.findById)
  .put(nichesController.update)
  .delete(nichesController.remove);

module.exports = router;
