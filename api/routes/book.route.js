var express = require("express");
var router = express.Router();

const BookModel = require("../model/book.schema").BookModel;

var verifyToken = require('../middleware/token.middleware');

// Add book
router.put("/books", (req, res) => {
    var book = new BookModel({
        bookID: 0,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
    });
    book.save();
    
    return res.status(200).json({
        status: true,
        message: "Book added.",
        data: docs
    });
});

// Book router
router.get("/books", verifyToken, (req, res) => {
    var dbRes;
    console.log("get books");
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

// Book router
router.get("/books/:id", verifyToken, (req, res) => {
    const { id } = req.params;
    var dbRes;
    console.log("get books with id: " + id);
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

router.delete('/books/:id', function (req, res) {
    const { id } = req.params;
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