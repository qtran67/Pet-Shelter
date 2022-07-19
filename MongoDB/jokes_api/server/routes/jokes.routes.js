const JokeController = require('../controllers/jokes.controller');
 
module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.get('/api/jokes/:_id', JokeController.findOneJoke);
    app.put('/api/jokes/:_id', JokeController.updateJoke);
    app.delete('/api/jokes/:_id', JokeController.deleteJoke);
}
