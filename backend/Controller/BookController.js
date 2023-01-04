const Book = require('../Models/BookModel');
const fs = require('fs');

//get all books
const getBooks = async(req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try{
        const books = await Book.find();
        res.status(200).json(books);
    }
    catch(err){
        res.status(404).json({err:err.message})
    }
}

//get a book
const getBook = async(req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'Book not found'})
    }
    try{

        const book = await Book.findById({_id:id});

        if(!book){
            return res.status(404).json({message:'Book not found'})
        }
    }
    catch(err){ 
        res.status(404).json({err:err.message})
    }

}


//add a book
const addBook = async(req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try{
        const saveImage =await new Book({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            image: {
                data: fs.readFileSync('uploads/' + req.file.filename),
                contentType: 'image/jpg'
            }
        })
        saveImage.save()
        .then(() =>res.status(200).json({message:'Book added successfully'}))
        .catch(err => console.log(err));
        
    }
    catch(error){
        res.status(404).json({error:error.message})
    }
    
}
//delete book
const deleteBook = async(req, res) => {

    res.set('Access-Control-Allow-Origin', '*');
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({message:'Book not found'})
    }
    try{
        const book = await Book.findByIdAndDelete({_id:id});
        if(!book){
          return  res.status(404).json({message:'Book not found'})
        }
        res.status(200).json({message:'Book deleted successfully'})
    }
    catch(err){
        res.status(404).json({err:err.message})
    }
}

//update book

const updateBook = async(req, res) => {
    const {id} = req.params;
    const {title, author, description,image} = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'Book not found'})
    }
    const book= await Book.findByIdAndUpdate({_id:id}, {title, author, description,image}, {new:true});
    if(!book){
       return res.status(404).json({message:'Book not found'})
    }
    res

}


module.exports = { addBook, getBooks, deleteBook, updateBook ,getBook };