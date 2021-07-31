const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');


routes.get('/product', ProductController.indexAll);
routes.get('/product/:id', ProductController.indexId)
routes.post('/product', ProductController.create);
routes.put('/product/:id', ProductController.edit);
routes.delete('/product/:id', ProductController.delete);

module.exports = routes;