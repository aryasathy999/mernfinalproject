const express=require('express');
const bp=require('body-parser');
const app=express();
const port=3001;
app.use(bp.urlencoded({extended:false}));
app.use(bp.json());
let products=[
    {id:1, name:"rice", price:100},
    {id:2, name:"wheat", price:200},
    {id:3, name:"dhal", price:185},
    {id:4, name:"egg", price:50},
    {id:5, name:"fish", price:200}
];
function updatePrice(productId, newPrice){
    const product=products.find(p => p.id === productId);
    if(product){
        product.price=newPrice;
        return product;
    }
    else{
        return null;
    }
}
app.post('/update-price', (req,res) => {
    console.log("Request Body:", req.body);
    const productId=parseInt(req.body.productId);
    const newPrice=parseFloat(req.body.newPrice);
    if (typeof productId !== 'number' || typeof newPrice !== 'number') {
        return res.status(400).json({ message: "Invalid input. 'productId' and 'newPrice' must be numbers." });
    }
    const updatedProduct=updatePrice(productId,newPrice);
    if(updatedProduct){
        res.json({message: "Price Updated", product: updatedProduct});
    }
    else{
        res.status(404).json({message: "Product not found"});
    }
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});