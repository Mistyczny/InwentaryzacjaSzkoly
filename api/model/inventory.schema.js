var mongoose = require("mongoose");

const InventoryItemSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        serialNumber: {
            type: String,
            required: true
        },
        purchaseDate: {
            type: Date,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        collection: 'inventory'
    }
);

const InventoryItemModel = mongoose.model('InventoryItem', InventoryItemSchema);
module.exports.InventoryItemSchema = InventoryItemSchema;
module.exports.InventoryItemModel = InventoryItemModel;