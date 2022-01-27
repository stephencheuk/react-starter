const {getDatabase} = require('./database/db');

const collectionName = 'books';

async function addBook(newBook) {
  const database = await getDatabase();
  return new Promise((resolve, reject) => {
    const sql = `insert into ${collectionName} (\`title\`) values (?)`;
    console.log(sql);
    database.query(sql, [newBook.title], function (error, results, fields) {
      if (error) throw error;
      console.log("1 record inserted");
      resolve();
    });
  });
}

async function getBooks() {
  const database = await getDatabase();
  return new Promise((resolve, reject) => {
    const sql = `select * from ${collectionName}`;
    console.log(sql);
    database.query(sql, function (error, results, fields) {
      if (error) throw error;
      resolve(results);
    });
  });
}

async function deleteBook(bookId) {
  const database = await getDatabase();
  return new Promise((resolve, reject) => {
    const sql = `delete from ${collectionName} where \`title\`=?`;
    console.log(sql);
    database.query(sql, [bookId], function (error, results, fields) {
      if (error) throw error;
      console.log("1 record deleted");
      resolve();
    });
  });
}

async function updateBook(bookId, book) {
  const database = await getDatabase();
  return new Promise((resolve, reject) => {
    const sql = `update ${collectionName} set \`title\`=? where \`id\`=?`;
    console.log(sql);
    database.query(sql, [book.title, bookId], function (error, results, fields) {
      if (error) throw error;
      console.log("1 record updated");
      resolve();
    });
  });
}

module.exports = {
    addBook,
    getBooks,
    deleteBook,
    updateBook,
};