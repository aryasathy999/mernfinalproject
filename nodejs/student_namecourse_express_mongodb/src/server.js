const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname));
mongoose.connect("mongodb://localhost:27017/KGISL", {
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));
const studentSchema=new mongoose.Schema({
    name: String,
    course: String
});
const Student=mongoose.model("students",studentSchema);
//insert student
app.post("/add-student", async(req,res) => {
    try{
        const {name,course}=req.body;
        const student=new Student({name,course});
        const savedStudent=await student.save();
        res.send(`Student saved successfully, ID: ${savedStudent._id}`);
    }
    catch(err){
        res.status(500).send("Error saving student");
    }
});
//update course
app.post("/update-course", async(req,res) => {
    try{
        let {name,newCourse}=req.body;
        if(name.trim().toLowerCase() === "john"){
            newCourse="MongoDB";
        }
        const result=await Student.findOneAndUpdate(
            {name:name},
            {course:newCourse},
            {new:true}
        );
        if(result){
            res.send(`Course updated to ${result.course} for student ${name}`);
        }
        else{
            res.send("Student not found");
        }
    }
    catch(err){
        res.status(500).send("Error updating course");
    }
});
//delete course
app.post("/delete-student", async(req,res) => {
    try{
        const {name}=req.body;
        const result=await Student.findOneAndDelete({name:name});
         if (result) {
            res.send("Student deleted successfully");
        } else {
            res.send("No record found");
        }
    }
    catch(err){
        res.status(500).send("Error deleting student");
    }
});
app.listen("3000", () => {
    console.log("Server running on http://localhost:3000");
});