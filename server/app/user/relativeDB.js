module.exports = (db) => {

  // create many to many user_roles table for link up user and role
  if(db.user && db.role){
    db.user.belongsToMany(db.role, {
      through: "user_roles",
      foreignKey: "userId",
      otherKey: "roleId"
    });
  }

};
