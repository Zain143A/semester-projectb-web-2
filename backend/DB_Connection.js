const mongoose = require('mongoose');
const mongo_url= process.env.MONGO_URL;
const connectToMongo = () => {

    mongoose.connect(mongo_url)
    .then(() => 
        {
            console.log('Connected to MongoDB');
        }
    )
    .catch(err => console.log("Error occured while connecting to MongoDB "+err))

}


module.exports = connectToMongo;