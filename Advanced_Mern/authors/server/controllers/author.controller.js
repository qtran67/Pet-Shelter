const Author = require('../models/author.model');

module.exports = {
    getAuthors: (req, res) => {
        Author.find({})
        .then((authors) => {
            res.json(authors);
        })
        .catch((err) => {
            console.log('ERROR IN Get all', err);
            res.status(400).json({ message: 'something went wrong in find all authors', error: err });
        });
    },
    getAuthorById: (req, res) => {
        Author.findOne({ _id: req.params.id })
        .then((author) => {
            res.json(author);
        })
        .catch((err) => {
            console.log('ERROR IN Get Author', err);
            res.status(400).json({ message: 'something went wrong in find author', error: err });
        });
    },
    createAuthor: (req, res) => {
        Author.create(req.body)
        .then((author) => {
            res.status(201).json(author);
        })
        .catch((err) => {
            console.log('ERROR IN create Author', err);
            res.status(400).json({ message: 'something went wrong in create author', error: err });
        });
    },
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then((author) => {
            res.json(author);
        })
        .catch((err) => {
            console.log('ERROR IN update Author', err);
            res.status(400).json({ message: 'something went wrong in update author', error: err });
        });
    },
    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
        .then((author) => {
            res.json(author);
        })
        .catch((err) => {
            console.log('ERROR IN delete Author', err);
            res.status(400).json({ message: 'something went wrong in delete author', error: err });
        });
    },
};