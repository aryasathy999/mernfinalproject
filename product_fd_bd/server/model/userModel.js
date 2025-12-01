import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
export default mongoose.model("users",userSchema);