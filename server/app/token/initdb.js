module.exports = (db) => {

  // create one to many userid foreign key to token table
  if(db.user && db.token){
    db.user.hasMany(db.token);
    db.token.belongsTo(db.user);
  }

};
