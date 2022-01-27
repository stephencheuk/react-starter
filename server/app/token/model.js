module.exports = (db) => {
  const sequelize = db.sequelize;
  const Sequelize = db.Sequelize;

  console.log('initial tokens models');
  const Token = sequelize.define("token", {
    token: {
      type: Sequelize.STRING
    }
  });

//  db.token = Token;

  return Token;
};
