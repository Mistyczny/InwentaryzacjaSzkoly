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
            type: String
        },
        lastName: {
            type: String
        },
        creationDate: {
            type: Date
        }
    },
    {
        collection: 'users'
    }
);


const UserModel = mongoose.model('User', UserSchema);
module.exports.UserSchema = UserSchema;
module.exports.UserModel = UserModel;