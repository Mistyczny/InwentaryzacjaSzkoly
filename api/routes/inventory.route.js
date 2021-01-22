var express = require("express");
var router = express.Router();

const InventoryModel = require("../model/inventory.schema").InventoryItemModel;

var verifyToken = require('../middleware/token.middleware');

// Get whole inventory
router.get("/inventory", verifyToken, (req, res) => {
    var dbRes;
    InventoryModel.find({}).exec((err, docs) => {
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

// Add inventory item
router.put("/inventory", (req, res) => {
    var inventoryItem = new InventoryModel({
        name: req.body.name,
        price: req.body.price,
        serialNumber: req.body.serialNumber,
        purchaseDate: req.body.purchaseDate,
        description: req.body.description
    });
    inventoryItem.save();
        
    return res.status(200).json({
        status: true,
        message: "Inventory item added."
    });
});

// Remove inventory item
router.delete('/inventory/:id', function (req, res) {
    const { id } = req.params;
    InventoryModel.deleteOne({_id: id}).exec((err, docs) => {
        if(err) {
            return res.status(500).json({message: err});
        }

        return res.status(200).json({
            status: true,
            message: "Inventory item data removed.",
            data: docs
        });
    });
});

// Get inventory item by id
router.get("/inventory/:id", verifyToken, (req, res) => {
    const { id } = req.params;
    var dbRes;
    InventoryModel.findOne({_id: id}).exec((err, docs) => {
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

// Update inventory item by id
router.post("/inventory/:id", (req, res) => {
    var id = req.params.id;
    var inventoryItem = new InventoryModel({
        name: req.body.name,
        price: req.body.price,
        serialNumber: req.body.serialNumber,
        purchaseDate: req.body.purchaseDate,
        description: req.body.description
    });
    InventoryModel.updateOne({_id: id}, {$set: {name: inventoryItem.name, 
                                                price: inventoryItem.price, 
                                                serialNumber: inventoryItem.serialNumber,
                                                purchaseDate: inventoryItem.purchaseDate,
                                                description: inventoryItem.description}}).exec((err, docs) => {
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