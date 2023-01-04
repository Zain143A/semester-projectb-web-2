//envoriment variables
require('dotenv').config();


//database connection
const connectToMongo = require('./DB_Connection');
const mongoose = require('mongoose');
connectToMongo();

//express setup
const express = require('express');
const app = express();
const port= process.env.PORT;


//middleware
app.use(express.json());

//Routes import
const BookRoute = require('./Router/Book');

//port listening
app.listen(port, () => {
    console.log('Server started ' + port)
});  

//Routes implementation
app.use('/api/books', BookRoute);
