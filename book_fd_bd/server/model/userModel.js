import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});
export default mongoose.model("books",userSchema);