const express = require('express');
const product_route = express();

const bodyParser = require('body-parser');
product_route.use(bodyParser.json());
product_route.use(bodyParser.urlencoded({ extended: true }));

const multer = require('multer');
const path = require('path');

product_route.use(express.static('public'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/productImages'), function (error, success) {
      if (error) {
        throw error
      }
    });
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name, function (error, success) {
      if (error) throw error
    })
  }

});

const upload = multer({ storage: storage });

const auth = require("../middleware/auth");

const product_controller = require('../controller/productControllers')

product_route.post('/add-product',upload.array('images'),auth,product_controller.add_product);

module.exports = product_route;

// hme img ko upload krni hai to we will use upload.  TO 8 img hai usko array ke 
// form me upload krna hai to usko hm "upload.array()" likha
// img ka jo naam hai use hm upload.array() me pass kr denge (same in formdata)
      // i.e.  upload.array('images') 
// hm yahi pr no. of images ko pass kr sakte but
      // i.e.  upload.array('images',8) 
//we will now passing here we will in different way i.e. we will apply it in model

