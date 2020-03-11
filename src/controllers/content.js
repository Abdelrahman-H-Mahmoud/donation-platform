const routes = require('express').Router();
const contentService = require('../services/content');

routes.get('/', async (req, res, next) => {
    try {
        const { skip, limit, ...query } = req.query;

        const { contents } = await contentService.getAll(query, skip, limit);
        res.send(contents);
        next();
    } catch (error) {
        next(error);
    }

});


routes.use((err, req, res, next) => {
    res.send({ message: 'internal server error', code: 500 });
    next();
});

module.exports = routes;
