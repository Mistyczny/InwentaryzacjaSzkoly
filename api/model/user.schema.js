var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        login: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        creationDate: {
            type: Date,
            required: false
        }
    },
    {
        collection: 'users'
    }
);

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;