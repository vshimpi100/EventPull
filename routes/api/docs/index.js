const router = require("express").Router();
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

// will send swagger definition JSON to route
// matches /api/docs/spec
router.route("/spec").get(function(request, response) {
  response.setHeader("Content-Type", "application/json");
  response.send(JSON.stringify(swaggerDocument));
});

// we will serve our swagger documentation to the main route
// matches /api/docs/
router.route("/").get(swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;