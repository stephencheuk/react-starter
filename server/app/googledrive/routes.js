const { verifySignUp } = require("../../middleware");
const controller = require("./controller");
const { authJwt } = require("../../middleware");

module.exports = function (app) {

  app.post(
    "/api/googledrive/setup",
    [authJwt.verifyToken],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);
};
