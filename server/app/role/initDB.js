module.exports = (db) => {

  console.log('create initial data', db.user, db.role);

  // create many to many user_roles table for link up user and role
  if(db.user && db.role){

    db.role.create({ id: 1, name: "user" });
    db.role.create({ id: 2, name: "moderator" });
    db.role.create({ id: 3, name: "admin" });

  }

};
