var mysql = require('mysql');
const config = require("../config/db.config.js");
const util = require("util"); 

var mysqlDatabase = null;

async function initializeDatabase() {
  mysqlDatabase = mysql.createPool({
    host     : 'localhost',
    user     : config.USER,
    password : config.PASSWORD,
    database : config.DB,
    connectionLimit: 100,
    debug: true,
  });
  // mysqlDatabase.query = util.promisify(mysqlDatabase.query).bind(mysqlDatabase);

  //mysqlDatabase.getConnection(function(err, connection){
  //  //新增完成後，查詢目前所有使用者
  //  connection.query('SELECT 1 + 1 AS solution', function(err, rows, field){
  //      if (err) throw err;
  //      console.log('MYSQL connection is ready');
  //  });
  //  connection.release();
  //});

}

async function getDatabase() {
  if (!mysqlDatabase) await initializeDatabase();
  return mysqlDatabase;
}

module.exports = {
  getDatabase,
  initializeDatabase,
};