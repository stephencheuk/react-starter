exports.allAccess = (req, res) => {
  //res.status(200).send("Public Content.");
  res.status(200).send({
    'total': 4,
    'page': 1,
    'per_page': 5,
    'total_pages': 1,
    'data': [
      {
        name: "Stephen", surname: "Cheuk", birthYear: 1978, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
      }, {
        name: "Tiffany", surname: "Tsang", birthYear: 1979, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
      }, {
        name: "Marco", surname: "Cheuk", birthYear: 2013, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
      }, {
        name: "Programmer", surname: "Worker", birthYear: 1995, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
      },
    ]
  });
};

exports.allAccess2 = (req, res) => {
  res.status(200).send("Public Content 2.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
