const cors = require("cors");
const fs = require('fs');
var glob = require( 'glob' )
  , path = require( 'path' );

'use strict';

module.exports = function(app) {

  const initDBModel = async (db) => {
    // import all db models
    console.log("import all db models", `${process.cwd()}/app/**/model.js`);
    glob.sync( `${process.cwd()}/app/**/model.js` ).forEach( function( file ) {
      const paths = file.split(/\//);
      console.log('path', file, paths.at(-2));
      try{
        db[paths.at(-2)] = require( path.resolve( file ) )(db);
      }catch(e){
        console.log(e);
      }
    });
  };

  const relativeDB = async (db) => {
    // rebuild relative
    // import all db models
    console.log("import all db relative", `${process.cwd()}/app/**/relativeDB.js`);
    glob.sync( `${process.cwd()}/app/**/relativeDB.js` ).forEach( function( file ) {
      const paths = file.split(/\//);
      console.log('path', file, paths.at(-2));
      try{
        require( path.resolve( file ) )(db);
      }catch(e){
        console.log(e);
      }
    });
  };

  const syncDB = async (db) => {
    // rebuild database 
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true }).then(()=>{
      db.sequelize.sync({force: true}).then(()=>{
        initData(db);
      });
    });
  };

  const initData = async (db) => {
    // import all db initial routine
    glob.sync( `${process.cwd()}/app/**/initDB.js` ).forEach( function( file ) {
      console.log('path:', file);
      require( path.resolve( file ) )(db);
    });
  };

  return {

    initDB: (db) => {

      console.log('initialing Database ...');

      initDBModel(db);
      relativeDB(db);
      syncDB(db);

    },

    init: () => {
      return new Promise((resolve, reject) => {
        return resolve();
      });
    },

  }
};
