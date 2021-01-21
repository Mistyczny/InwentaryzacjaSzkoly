var mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
        itemID: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        count: {
            type: Number
        },
        description: {
            type: String
        }
    }, {
        collection: 'inventory'
    }
);


const InventoryModel = mongoose.model('Inwentaz', InventorySchema);
module.exports.InwentazSchema = InventorySchema;
module.exports.InwentazModel = InventoryModel;