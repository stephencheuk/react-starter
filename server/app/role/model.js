module.exports = (db) => {
  const sequelize = db.sequelize;
  const Sequelize = db.Sequelize;

  console.log('initial roles models');
  const Role = sequelize.define("roles", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

//  db.role = Role;

  return Role;
};
