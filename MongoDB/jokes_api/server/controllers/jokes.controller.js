const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((AllJokes) => {
            res.json(AllJokes)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(Joke => {
            res.json(Joke)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.createNewJoke = (req, res) => {
    console.log(req.body);
    Joke.create(req.body)
        .then(NewJoke => {
            res.json(NewJoke)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json(updatedJoke)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}