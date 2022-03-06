module.exports = (db) => {
  const sequelize = db.sequelize;

  console.log('initial books models');
  const Books = sequelize.define("books", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4(),
      primaryKey: true,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING
    },
    basepath: {
      type: Sequelize.STRING
    }
  });

  return Books;
};
