//multer
const upload = require('../multer');

//express
const express=require('express');
const {
    addBook,
    getBooks,
    deleteBook,
    updateBook,
    getBook
}
=require('../Controller/BookController');

const router=express.Router();

//get all books
router.get('/',getBooks)

//get a book
router.get('/:id',getBook)

//get a book
router.get('/:id',)

//add a book
router.post('/',upload.single('image'),addBook)

//update a book
router.patch('/:id',updateBook)

//delete a book
router.delete('/:id',deleteBook)

module.exports=router;