module.exports = (db) => {

  // create many to many user_roles table for link up user and role
  if(db.user && db.role){
    db.role.belongsToMany(db.user, {
      through: "user_roles",
      foreignKey: "roleId",
      otherKey: "userId"
    });

  }

};
