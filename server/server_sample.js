const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const {initializeDatabase} = require('./database/db');
const {addBook, getBooks, deleteBook, updateBook} = require('./endpoints');

const app = express();

const books = [
    {title: 'Js Primer'}
];
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

// defining an endpoint to return all books
// fetch data
app.get('/', async (req, res) => {
    //await getBooks().then((results)=>res.send(results));
    res.send(await getBooks());
});
// insert data
app.post('/', async (req, res) => {
    const newBook = req.body;
    await addBook(newBook);
    res.send({ message: 'Book added.' });
});
// delete data
app.delete('/:id', async (req, res) => {
    await deleteBook(req.params.id);
    res.send({ message: 'Book deleted.' });
});
// update data
app.put('/:id', async (req, res) => {
    const updatedBook = req.body;
    await updateBook(req.params.id, updateBook);
    res.send({ message: 'Book updated.' });
});

// start the server
// set port, listen for requests

const PORT = process.env.PORT || 8080;

initializeDatabase().then(async () => {
    //await addBook({title: 'You Don\'t Know Js!'});
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
});
