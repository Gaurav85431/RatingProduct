const express = require('express');
const subcategory_route = express();

const bodyParser = require('body-parser');
subcategory_route.use(bodyParser.json());
subcategory_route.use(bodyParser.urlencoded({ extended: true }));

const auth = require('../middleware/auth');

const subcategory_controller = require('../controller/subCategoryController');

subcategory_route.post('/add-sub-category', auth, subcategory_controller.create_subcategory);

subcategory_route.get('/view-sub-category',)  //**** */

subcategory_route.delete('/delete-sub-category', subcategory_controller.delete_subcategory);

module.exports = subcategory_route;