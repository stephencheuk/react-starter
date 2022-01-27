const db = require("../../ORM");
const Books = db.books;

exports.all = (req, res) => {
  Books.findAll(
//      {
//        where: {
//          username: req.body.username
//        }
//      }
    )
    .then(books => {
      if (!books) {
        return res.status(404).send({ message: "Books Not found." });
      }
      res.status(200).send(books);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
