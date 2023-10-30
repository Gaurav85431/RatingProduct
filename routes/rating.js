const express = require('express');

const product_rating_route = express();

const bodyParser = require('body-parser');
product_rating_route.use(bodyParser.json());

product_rating_route.use(bodyParser.urlencoded({ extended: true }));

const auth = require('../middleware/auth');

const product_rating_controller = require('../controller/ratingController');

product_rating_route.post('/rate-product', auth, product_rating_controller.rating_product);

product_rating_route.get('/rate-our-product', product_rating_controller.rate_product);



module.exports = product_rating_route;