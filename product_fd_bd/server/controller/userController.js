import User from '../model/userModel.js';
//create products
export const create=async(req,res) => {
    try{
        const newUser=new User(req.body);
        const{product,price}=newUser;
        await newUser.save();
        res.send("Product saved successfully");
    }
    catch(err){
        res.status(500).send("Error saving product:" + err.message);
    }
};

//get all products
export const getAll=async(req,res) => {
    try{
        const products=await User.find();
        res.json(products);
    }
    catch(err){
        res.status(500).send("Error fetching products");
    }
};