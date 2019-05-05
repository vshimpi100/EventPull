const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/n"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/n/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router
  .route("/find/:username")
  .get(usersController.findOne);

module.exports = router;
