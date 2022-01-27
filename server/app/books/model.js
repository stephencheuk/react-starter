module.exports = (db) => {
  const sequelize = db.sequelize;
  const Sequelize = db.Sequelize;

  console.log('initial books models');
  const Books = sequelize.define("books", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4(),
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING
    }
  });

//  db.books = Books;

  return Books;
};
