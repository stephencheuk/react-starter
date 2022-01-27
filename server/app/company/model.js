module.exports = (db) => {
  const sequelize = db.sequelize;
  const Sequelize = db.Sequelize;

  console.log('initial company models');
  const Company = sequelize.define("company", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4(),
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING
    },
    CompanyName: {
      type: Sequelize.STRING
    }
  });

//  db.company = Company;

  return Company;
};
