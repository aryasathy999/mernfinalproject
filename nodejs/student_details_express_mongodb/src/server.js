const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true})); //middleware to parse form data
app.use(express.static(__dirname)); //serve html form
mongoose.connect("mongodb://localhost:27017/KGISL", {
})
.then(() => console.log("mongodb connected"))
.catch(err => console.log(err));
//create schema
const studentsSchema=new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});
//create model
const Student=mongoose.model("Student",studentsSchema);
//handle post request
app.post('/student-details', async(req,res) => {
    try{
        const {name,age,course}=req.body;
        const newStudent=new Student({name,age,course});
        await newStudent.save();
        res.send("<h2>Student record saved successfully</h2>");
    }
    catch(err){
        res.status(500).send("Error saving student details")
    }
});
//start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});