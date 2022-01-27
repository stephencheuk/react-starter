
const helper = require('./utils/db_helper')();

// database
const db = require("./ORM");

// force: true will drop the table if it already exists
helper.init().then(()=>{
  helper.initDB(db);
}).catch(()=>{
}).finally(()=>{
  console.log(`Database initial done.`);
});
