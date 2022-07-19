const authorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api/authors', authorController.getAuthors);
    app.get('/api/authors/:id', authorController.getAuthorById);
    app.post('/api/authors', authorController.createAuthor);
    app.put('/api/authors/:id', authorController.updateAuthor);
    app.delete('/api/authors/:id', authorController.deleteAuthor);
};