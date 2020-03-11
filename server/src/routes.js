const routes = require('express').Router();
const contentController = require('./controllers/content');

routes.use('/content', contentController);

module.exports = routes;