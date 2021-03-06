var express = require("express");
var router = express.Router();

const BookModel = require("../model/book.schema").BookModel;

var verifyToken = require('../middleware/token.middleware');

// Add book
router.put("/books", (req, res) => {
    BookModel.find({}).sort({bookID: -1}).exec((err, docs) => {
        var book = new BookModel({
            bookID: docs[0].bookID + 1,
            title: req.body.title,
            author: req.body.author,
            description: req.body.description
        });
        book.save();
        
        return res.status(200).json({
            status: true,
            message: "Book added."
        });
    });
});

// Get all books
router.get("/books", verifyToken, (req, res) => {
    var dbRes;
    BookModel.find({}).exec((err, docs) => {
        if(err) {
            return res.status(500).json({message: err});
        }

        return res.status(200).json({
            status: true,
            message: "Book data prepared.",
            data: docs
        });
    });
});

// Get book with id
router.get("/books/:id", verifyToken, (req, res) => {
    const { id } = req.params;
    var dbRes;
    BookModel.findOne({bookID: id}).exec((err, docs) => {
        if(err) {
            return res.status(500).json({message: err});
        }

        return res.status(200).json({
            status: true,
            message: "Book data prepared.",
            data: docs
        });
    });
});

// Remove book
router.delete('/books/:id', function (req, res) {
    const { id } = req.params;
    console.log(id)
    BookModel.deleteOne({bookID: id}).exec((err, docs) => {
        if(err) {
            return res.status(500).json({message: err});
        }

        return res.status(200).json({
            status: true,
            message: "Book data removed.",
            data: docs
        });
    });
});

// Update book
router.post("/books/:id", (req, res) => {
    var book = new BookModel({
        bookID: req.params.id,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
    });
    
    BookModel.updateOne({bookID: book.bookID}, {$set: {title: book.title, author: book.author, description: book.description}}).
        exec((err, docs) => {
        if(err) {
            return res.status(500).json({message: err});
        }

        return res.status(200).json({
            status: true,
            message: "Book data removed.",
            data: docs
        });
    });
});

module.exports = router;