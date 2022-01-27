const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const { getDatabase } = require("./database/db.js")

const app = express();

const helper = require('./utils/helper')(app);

helper.initAppUse();

// database
var db = require("./ORM");
//console.log('start connect to mysql')
//const mysql = getDatabase().then(()=>{ console.log('database then', mysql) });
//console.log('ended get database', mysql)

helper.initRoutes(db);

// forbidden root path
app.get("/", (req, res) => {
  return res.status(403).send("");
});

// base on url to dymanic import missing route
helper.setHotRoute(db, app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
