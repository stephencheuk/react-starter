module.exports = (db) => {

  console.log('create initial data', db.company);

  if(db.company){

    db.company.create({ id: 1, name: "Comp A", CompanyName: "Company A" });
    db.company.create({ id: 2, name: "Comp B", CompanyName: "Company B" });
    db.company.create({ id: 3, name: "Comp C", CompanyName: "Company C" });
    db.company.create({ id: 4, name: "Comp D", CompanyName: "Company D" });
    db.company.create({ id: 5, name: "Comp E", CompanyName: "Company E" });
    db.company.create({ id: 6, name: "Comp F", CompanyName: "Company F" });
    db.company.create({ id: 7, name: "Comp G", CompanyName: "Company G" });
    db.company.create({ id: 8, name: "Comp H", CompanyName: "Company H" });
    db.company.create({ id: 9, name: "Comp I", CompanyName: "Company I" });
    db.company.create({ id: 10, name: "Comp J", CompanyName: "Company J" });
    db.company.create({ id: 11, name: "Comp K", CompanyName: "Company K" });
    db.company.create({ id: 12, name: "Comp L", CompanyName: "Company L" });
    db.company.create({ id: 13, name: "Comp M", CompanyName: "Company M" });
    db.company.create({ id: 14, name: "Comp N", CompanyName: "Company N" });
    db.company.create({ id: 15, name: "Comp O", CompanyName: "Company O" });
    db.company.create({ id: 16, name: "Comp P", CompanyName: "Company P" });
    db.company.create({ id: 17, name: "Comp Q", CompanyName: "Company Q" });
    db.company.create({ id: 18, name: "Comp R", CompanyName: "Company R" });
    db.company.create({ id: 19, name: "Comp S", CompanyName: "Company S" });
    db.company.create({ id: 20, name: "Comp T", CompanyName: "Company T" });

  }

};
