const { authJwt } = require("../../middleware");
const controller = require(`./controller`);

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/books/all",
    controller.all
  );

//  app.get(
//    "/api/books/all",
//    [authJwt.verifyToken],
//    controller.all
//  );
//
//  app.get(
//    "/api/books/all",
//    [authJwt.verifyToken, authJwt.isModerator],
//    controller.all
//  );
//
//  app.get(
//    "/api/books/all",
//    [authJwt.verifyToken, authJwt.isAdmin],
//    controller.all
//  );

};
