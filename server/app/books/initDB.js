module.exports = (db) => {
  console.log('create initial data', db.user, db.role);
  db.books.create({ name: "Hello world" });
  db.books.create({ name: "React in nut shell" });
  db.books.create({ name: "Java Pattern" });
  db.books.create({ name: "Python in world" });
};
