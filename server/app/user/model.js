module.exports = (db) => {
  const sequelize = db.sequelize;
  const Sequelize = db.Sequelize;

  console.log('initial users models');
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

//  db.user = User;
  return User;
};
