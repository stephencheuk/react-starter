module.exports = (db) => {

  // create many to many user_roles table for link up user and role
  if(db.user && db.token){
    db.user.hasMany(db.token);
    db.token.belongsTo(db.user);
  }

};
