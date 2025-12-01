const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/KGISL", {
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
// Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});
// Model
const Product = mongoose.model("Product", productSchema);
// Route to add product
app.post("/add-product", async (req, res) => {
    try {
        const { name, price } = req.body;
        const product = new Product({ name, price });
        const savedProduct = await product.save();
        res.send(`Product added successfully: ${savedProduct.name}, Price: ${savedProduct.price}`);
    } catch (err) {
        res.status(500).send("Error adding product");
    }
});
// Route to update product price
app.post("/update-price", async (req, res) => {
    try {
        const { name, newPrice } = req.body;
        const updated = await Product.findOneAndUpdate(
            { name },
            { price: newPrice },
            { new: true }
        );
        if (updated) {
            res.send(`Price updated: ${updated.name} → ${updated.price}`);
        } else {
            res.send("Product not found");
        }
    } catch (err) {
        res.status(500).send("Error updating price");
    }
});
// Route to delete product
app.post("/delete-product", async (req, res) => {
    try {
        const { name } = req.body;
        const deleted = await Product.findOneAndDelete({ name });
        if (deleted) {
            res.send(`Product deleted successfully: ${deleted.name}`);
        } else {
            res.send("No product found to delete");
        }
    } catch (err) {
        res.status(500).send("Error deleting product");
    }
});
// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
