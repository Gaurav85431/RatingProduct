const express = require('express');
const app = express();
const http = require("http");
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');



const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/mySaloon');


//user routes 

const user_route = require('./routes/userRoutes');
app.use('/api', user_route)


// category routes
const category_routes = require('./routes/categoryRoute');
app.use('/api', category_routes);

//subcategory routes 

const subcategory_route = require('./routes/subCategoryRoutes');
app.use('/api', subcategory_route);

// product routes::::::
const product_routes = require('./routes/productRoute');
app.use('/api', product_routes);

// buy Product routes:::::::::::
const buy_product_route = require('./routes/buyProductRoute');
app.use('/api', buy_product_route);

// Rating routes::::::::::
const rating_routes = require('./routes/ratingRoute');
app.use('/api', rating_routes);

// New Rating Routes:::;
const rate_routes = require('./routes/rating');
app.use('/api', rate_routes);

app.post('/myapi', (req, res) => {
  res.send("hello");
});


app.get('/getapi', (req, res) => {


  res.send('server is runnimng at render');

});



app.listen(3008, function () {
  console.log("Server is running");
})


const PORT = 8000;
const DB = "mongodb+srv://Gaurav:eP2ILjAadWqdYhMda@mydata.dlsmajj.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB)
  .then(() => {
    console.log("Connected to MongoDB");
    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Server is running on :${PORT}`);
    });
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });
