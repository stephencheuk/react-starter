const ctrl = require(`./controller`);

const router = require("express").Router();
var ObjectId = require('mongodb').ObjectId;

const url = process.env.MONGO_URL

module.exports = function(app) {

  app.post(
    "/api/blog/add",
    ctrl.add
  );

  app.delete(
    "/api/blog/del/:id",
    ctrl.del
  );

  app.put(
    "/api/blog/update/:id",
    ctrl.update
  );

  app.get(
    "/api/blog/list",
    ctrl.list
  );

  app.get(
    "/api/blog/post/:id",
    ctrl.viewPost
  );

  app.get(
    "/api/blog/tags",
    ctrl.tags
  )
};
