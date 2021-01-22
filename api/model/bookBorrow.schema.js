var mongoose = require("mongoose");

const BookBorrowSchema = new mongoose.Schema({
        borrowerID: {
            type: String,
            required: true
        },
        bookID: {
            type: Number,
            required: true
        },
        borrowDate: {
            type: Date,
            required: true
        },
        exprectedReturnDate: {
            type: Date,
            required: true
        }
    }, {
        collection: 'bookBorrows'
    }
);


const BookBorrowModel = mongoose.model('BookBorrow', BookBorrowSchema);
module.exports.BookSchema = BookBorrowSchema;
module.exports.BookBorrowModel = BookBorrowModel;