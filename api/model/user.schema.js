var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        login: {
            type: String,
            required: true,
            minlength: 8,
            maxlength: 32
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            maxlength: 32
        },
        firstName: {
            type: String,
            required: true,
            minlength: 4,
            maxlength: 32
        },
        lastName: {
            type: String,
            required: true,
            minlength: 4,
            maxlength: 32
        },
        creationDate: {
            type: Date,
            required: true
        }
    },
    {
        collection: 'users'
    }
);


const UserModel = mongoose.model('User', UserSchema);
module.exports.UserSchema = UserSchema;
module.exports.UserModel = UserModel;