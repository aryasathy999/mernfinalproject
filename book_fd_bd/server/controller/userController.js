import User from '../model/userModel.js';
//create books
export const create = async(req,res) => {
    try{
        const newUser=new User(req.body);
        const {bookName,price}=newUser;
        await newUser.save();
        res.send("Book saved successfully");
    }
    catch(err){
        res.status(500).send("Error saving book", err);
    }
};

//get all books
export const getAll = async(req,res) => {
    try{
        const books=await User.find();
        res.json(books);
    }
    catch(err){
        res.status(500).send("Error getting books",err);
    }
};

//update price of a book
export const update = async(req,res) => {
    try{
        const {price}=req.body;
        const updatedBook=await User.findByIdAndUpdate(
            req.params.id,
            {price},
            {new:true}
        );
        res.json(updatedBook);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

//delete a book
export const deleteUser = async(req,res) => {
    try{
        const id=req.params.id;
        const userExist=await User.findById(id);
        if(!userExist){
            res.status(404).json({message: "User not found"});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({message: "User deleted successfully"});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};