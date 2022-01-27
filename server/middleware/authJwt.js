const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../ORM");
const User = db.user;
const Token = db.token;
const { Buffer } = require("buffer");

verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  console.log('verifyToken', token);

  // forbidden if missing
  if (!token) {
    console.log('verifyToken', "No token provided!");
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  let ERROR;
  // verify token
  await jwt.verify(token, config.secret, async (err, decoded) => {
    if (err) {
      console.log('verifyToken', "Unauthorized!");
      ERROR = "Unauthorized!";
      return res.status(401).send({
        message: ERROR,
      });
    }

    console.log('verifyToken', "find one!");
    await Token.findOne({
      where: {
        token
      }
    })
    .then(token => {

      console.log('verifyToken', "find one result", token);

      if(!token){
        ERROR = "Unauthorized!";
        return res.status(401).send({
          message: ERROR,
        });
      }

      const exp = JSON.parse(Buffer.from(token.token.split('.')[1], 'base64').toString('binary')).exp;
      if (exp <= parseInt((new Date).getTime() / 1000)) {
        ERROR = "Unauthorized!";
        return res.status(401).send({
          message: ERROR,
        });
      }

    })
    .catch(err => {

      console.log('verifyToken', "error", err);

      ERROR = "Unauthorized!";

      return res.status(401).send({
        message: "Unauthorized!"
      });
    });

    if (ERROR) return;

    req.userId = decoded.id;

    next();
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};

isModerator = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Moderator Role!"
      });
    });
  });
};

isModeratorOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }

        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Moderator or Admin Role!"
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isModerator: isModerator,
  isModeratorOrAdmin: isModeratorOrAdmin
};
module.exports = authJwt;
