const cors = require("cors");
const express = require("express");
const bodyParser = require('body-parser');
const fs = require('fs');
var glob = require('glob')
  , path = require('path');

const helmet = require("helmet");
const morgan = require('morgan');

'use strict';

var self = {};

module.exports = function (app) {

  self = {

    initAppUse: () => {
      self.cors();
      app.use(express.json());
      app.use(express.urlencoded({ extended: true }));
      app.use(bodyParser.json());
      app.use(helmet());
      // log middleware
      app.use(morgan('combined'));
    },

    cors: () => {
      //var corsOptions = {
      //  //origin: "http://192.168.2.83:3000"
      //  origin: '*'
      //};
      //app.use(cors(corsOptions));

      app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
        next();
      });
    },

    initRoutes: (db) => {
      // import all db initial routine
      glob.sync(`${process.cwd()}/app/**/model.js`).forEach(function (file) {
        const paths = file.split(/\//);
        console.log('path:', file);
        db[paths.at(-2)] = require(path.resolve(file))(db);
      });

      glob.sync(`${process.cwd()}/app/**/relativeDB.js`).forEach(function (file) {
        const paths = file.split(/\//);
        console.log('path', file, paths.at(-2));
        try {
          require(path.resolve(file))(db);
        } catch (e) {
          console.log(e);
        }
      });

      glob.sync(`${process.cwd()}/app/**/routes.js`).forEach(function (file) {
        console.log('path:', file);
        require(path.resolve(file))(app);
      });
    },

    setHotRoute: (db, app) => {
      // dymanic import additional route
      app.use(function autoLoader(req, res, next) {
        let url = req.url.split('/');
        // import routes dynamically
        let path;
        console.log("Check", url, url[2], db[url[2]]);
        console.log(db.user);
        if (url[1] === 'api' && url[2] && !db[url[2]]) {

          console.log(`Missing route on ${req.url}`);

          console.log('modules', url[2], db[url[2]], db.books);

          //          if(!db[url[2]]){
          //            console.log(`modules ${url[2]} does not load yet`);
          //            path = `${process.cwd()}/app/models/${url[2]}.model`;
          //            if (fs.existsSync(`${path}.js`)) {
          //              console.log(`file ${path}.js exists`);
          //              db[url[2]] = require(path)(db.sequelize, db.Sequelize);
          //              console.log(`file ${path}.js loaded`);
          //            }else{
          //              console.log(`file ${path}.js does not exists`);
          //            }
          //            path = `${process.cwd()}/app/routes/${url[2]}.routes`;
          //            if (fs.existsSync(`${path}.js`)) {
          //              console.log(`file ${path}.js exists`);
          //              //file exists
          //              require(path)(app);
          //              console.log(`file ${path}.js loaded`);
          //            }else{
          //              console.log(`file ${path}.js does not exists`);
          //            }
          //          }
          //
          //          if(!db[url[2]]){
          //            console.log(`modules ${url[2]} does not load yet`);
          //            path = `${process.cwd()}/app/${url[2]}/model`;
          //            if (fs.existsSync(`${path}.js`)) {
          //              console.log(`file ${path}.js exists`);
          //              db[url[2]] = require(path)(db.sequelize, db.Sequelize);
          //              console.log(`file ${path}.js loaded`);
          //            }else{
          //              console.log(`file ${path}.js does not exists`);
          //            }
          //            path = `${process.cwd()}/app/${url[2]}/routes`;
          //            if (fs.existsSync(`${path}.js`)) {
          //              console.log(`file ${path}.js exists`);
          //              //file exists
          //              require(path)(app);
          //              console.log(`file ${path}.js loaded`);
          //            }else{
          //              console.log(`file ${path}.js does not exists`);
          //            }
          //          }

        }
        next()
      });
    },

  };

  return self;
};
