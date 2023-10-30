const express = require('express');

const product_rating_route = express();

const bodyParser = require('body-parser');
product_rating_route.use(bodyParser.json());

product_rating_route.use(bodyParser.urlencoded({ extended: true }));

const auth = require('../middleware/auth');

const product_rating_controller = require('../controller/ratingProductController');

product_rating_route.post('/rating-product', auth, product_rating_controller.rating_product);

module.exports = product_rating_route;