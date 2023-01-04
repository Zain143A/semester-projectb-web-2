const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({

    title: {
        type: String,
        reqired: true
    },

    author: {
        type: String,
        reqired: true
    },
    description: {
        type: String,
        reqired: true
    },
    image: {
        data: Buffer,
        contentType: String,
    }
},{timestamps:true});

module.exports = mongoose.model('Book', BookSchema);