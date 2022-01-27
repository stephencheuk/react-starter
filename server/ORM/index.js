const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    //operatorsAliases: false, //This is a no-op with v5 and should be removed.
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
console.log("ORM");
var db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.user = require("../models/user.model.js")(sequelize, Sequelize);
//db.role = require("../models/role.model.js")(sequelize, Sequelize);
//db.token = require("../models/token.model.js")(sequelize, Sequelize);

//// create many to many user_roles table for link up user and role
//db.role.belongsToMany(db.user, {
//  through: "user_roles",
//  foreignKey: "roleId",
//  otherKey: "userId"
//});
//
//db.user.belongsToMany(db.role, {
//  through: "user_roles",
//  foreignKey: "userId",
//  otherKey: "roleId"
//});
//
//// create one to many userid foreign key to token table
//db.user.hasMany(db.token);
//db.token.belongsTo(db.user);
//
//db.ROLES = ["user", "admin", "moderator"];
//
module.exports = db;

//  const City = sequelize.define('city', {
//    name: { type: Sequelize.STRING },
//    order_: { type: Sequelize.INTEGER }
//  });
//  City.sync().then(() => {
//    City.create({
//      name: 'Neuquen',
//      order_: 0
//    });
//    City.create({
//      name: 'General Roca',
//      order_: 1
//    });
//  });