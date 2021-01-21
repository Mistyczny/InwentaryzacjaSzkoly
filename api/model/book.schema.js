var mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
        bookID: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        author: {
            type: String
        },
        description: {
            type: String
        },
    }, {
        collection: 'books'
    }
);


const BookModel = mongoose.model('Book', BookSchema);
module.exports.BookSchema = BookSchema;
module.exports.BookModel = BookModel;