import User from '../model/userModel.js'
//create students
export const create = async(req,res) => {
    try{
        const newUser=new User(req.body);
        const{name,age,course}=newUser;
        await newUser.save();
        res.send("Student record saved successfully");
    }
    catch(err){
        res.status(500).send("Error saving student", err);
    }
};

export const getAll = async(req,res) => {
    try{
        const students=await User.find();
        res.json(students);
    }
    catch(err){
        res.status(500).send("Error getting students", err);
    }
};