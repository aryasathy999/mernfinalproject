const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true})); //middleware to parse form data
app.use(express.static(__dirname)); //Serve html form
mongoose.connect("mongodb://localhost:27017/KGISL", {
}).then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));
//Create Schema & Model
const productSchema=new mongoose.Schema({
    productName: String,
    price: Number
});
const Product=mongoose.model("Product",productSchema);
//handle post request
app.post("/add-product", async(req,res) => {
    try{
        const {productName, price}=req.body;
        const newProduct=new Product({productName,price});
        await newProduct.save();
        res.send("<h2>Product saved successfully");
    }
    catch(err){
        res.status(500).send("Error saving product");
    }
});
//Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
