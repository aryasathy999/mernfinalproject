import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    }
})
export default mongoose.model("students",userSchema);