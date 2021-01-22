var express = require("express");
var router = express.Router();

const BookBorrowModel = require("../model/bookBorrow.schema").BookBorrowModel;

var verifyToken = require('../middleware/token.middleware');

// Get all books borrows
router.get("/bookBorrow", verifyToken, (req, res) => {
    var dbRes;
    BookBorrowModel.find({}).exec((err, docs) => {
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

// Add books borrow
router.put("/bookBorrow", (req, res) => {
    var bookBorrow = new BookBorrowModel({
        borrowerID: req.body.borrowerID,
        bookID: req.body.bookID,
        borrowDate: req.body.borrowDate,
        exprectedReturnDate: req.body.exprectedReturnDate
    });
    bookBorrow.save();

    return res.status(200).json({
        status: true,
        message: "Book borrow added."
    });
});

// Remove books borrow
router.delete('/bookBorrow/:id', function (req, res) {
    const { id } = req.params;
    BookBorrowModel.deleteOne({_id: id}).exec((err, docs) => {
        if(err) {
            return res.status(500).json({message: err});
        }

        return res.status(200).json({
            status: true,
            message: "Book borrow data removed.",
            data: docs
        });
    });
});

// Get books borrow item by id
router.get("/bookBorrow/:id", verifyToken, (req, res) => {
    const { id } = req.params;
    var dbRes;
    BookBorrowModel.findOne({_id: id}).exec((err, docs) => {
        if(err) {
            return res.status(500).json({message: err});
        }

        return res.status(200).json({
            status: true,
            message: "Book borrow data prepared.",
            data: docs
        });
    });
});

// Update books borrow by id
router.post("/bookBorrow/:id", (req, res) => {
    var id = req.params.id;
    var bookBorrow = new BookBorrowModel({
        borrowerID: req.body.borrowerID,
        bookID: req.body.bookID,
        borrowDate: req.body.borrowDate,
        exprectedReturnDate: req.body.exprectedReturnDate
    });
    BookBorrowModel.updateOne({_id: id}, {$set: {name: inventoryItem.name, 
                                                price: inventoryItem.price, 
                                                serialNumber: inventoryItem.serialNumber,
                                                purchaseDate: inventoryItem.purchaseDate
                                            }}).exec((err, docs) => {
        if(err) {
            return res.status(500).json({message: err});
        }

        return res.status(200).json({
            status: true,
            message: "Inventory data updated.",
            data: docs
        });
    });
});

module.exports = router;