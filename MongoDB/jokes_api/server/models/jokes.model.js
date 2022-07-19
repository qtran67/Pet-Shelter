const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    text: String
    }, 
    {timestamps: true}
);

const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke;
