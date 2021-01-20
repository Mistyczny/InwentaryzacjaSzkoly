var mongoose = require("mongoose");

const InwentazSchema = new mongoose.Schema(
    {
        itemID: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        count: {
            type: String
        },
        description: {
            type: String
        }
    },
    {
        collection: 'inwentaz'
    }
);


const InwentazModel = mongoose.model('Inwentaz', InwentazSchema);
module.exports.InwentazSchema = InwentazSchema;
module.exports.InwentazModel = InwentazModel;