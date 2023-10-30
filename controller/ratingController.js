const RatingProduct = require('../models/ratingModel');
const BuyProduct = require('../models/buyProductModel');
const bcyptjs = require('bcryptjs');

const config = require('../config/config');

const jwt = require('jsonwebtoken');

const nodemailer = require('nodemailer');

//const randomString = require('random-string');


const sendReviewMessage = async (name, email) => {

  try {

    const transporter = nodemailer.createTransport({

      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: config.emailUser,
        pass: config.emailPassword
      }

    });

    const mailOption = {
      from: config.emailUser,
      to: email,
      subject: "For Rating of your purchased product",
      html: '<p> Hii ' + name + ', Please click to rate us <a href="http://127.0.0.1:3008/api/rate-our-product"> Rate us </a>'


    }

    transporter.sendMail(mailOption, function (error, info) {

      if (error) {
        console.log(error);
      }
      else {
        console.log("Mail has been sent :-" + info.response);
      }

    })

  } catch (error) {
    console.log(error);
    // res.status(400).send({ success: false, msg: error.message });
  }

}


const rating_product = async (req, res) => {

  try {

    const email = req.body.email;
    const buyProductData = await BuyProduct.findOne({ email: email });

    if (buyProductData) {
      /*
            const name = req.body.name;
            const buyProduct_id = req.body.buyProduct_id;
            const rating = req.body.rating;
            const feedback = req.body.feedback;
      
            const data = await BuyProduct.updateOne({ email: email }, { $set: { name: name, buyProduct_id: buyProduct_id, rating: rating, feedback: feedback } });
      
            sendReviewMessage(buyProductData.name, buyProductData.email, buyProduct_id, rating, feedback);
      */
      sendReviewMessage(buyProductData.name, buyProductData.email);
      res.status(200).send({ success: true, msg: "Please check your email and rate us!" })


    }
    else {
      res.status(200).send({ success: true, msg: "This email does not  exists" });
    }



  } catch (error) {
    res.status(200).send({ success: false, msg: error.message });

  }







}

// rate Product::

const rate_product = async (req, res) => {

  try {


    const email = req.body.email;
    const emailData = await BuyProduct.findOne({ email: email });


    if (emailData) {


      const ProductData = await BuyProduct.findById({ _id: req.body.buyProduct_id }); //_id :email._id
      const rating = req.body.rating;
      if (ProductData) {

        if (rating < 0 || rating > 5) {
          res.status(200).send({ success: false, msg: "Please enter rate in between 0 to 5" });
        }
        else {

          const myRating = new RatingProduct({


            name: req.body.name,
            email: req.body.email,
            buyProduct_id: req.body.buyProduct_id,
            rating: req.body.rating,
            feedback: req.body.feedback

          })



          const SaveRating = await myRating.save();


          //const SaveRating = await rate_product.save();

          res.status(200).send({ success: true, msg: "Buy Product details :)", data: SaveRating });

        }


      }
      else {
        res.status(200).send({ success: false, msg: "This Id does not exists" })
      }

      /**
            const UpdateRating = await RatingProduct.updateOne({ $set: { name: name, email: email, buyProduct_id: buyProduct_id, rating: rating, feedback: feedback } });
            sendReviewMessage(emailData.name, emailData.email, buyProduct_id, rating, feedback);
      
            res.status(200).send({ success: true, msg: "Thanks for Rating", data: UpdateRating });
      */


    }
    else {
      res.status(200).send({ success: true, msg: "This link has been expired" });
    }


  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }


}


module.exports = {

  rating_product,
  rate_product

}