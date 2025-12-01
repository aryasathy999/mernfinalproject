import React,{useState,useEffect} from 'react'
import axios from "axios"
const AddStudent = () => {
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [course,setCourse]=useState("");
    const [message,setMessage]=useState("");
    const [studentsData, setStudentsData]=useState([]);
    useEffect(() => {
        fetchdata();
    },[]);
    const handleSubmit = async(e) => {
        e.preventDefault();
        const data={name,age,course};
        try{
            const res=await axios.post("http://localhost:5000/students",data);
            setMessage(res.data);
            const ifAlreadyExists=studentsData.some(
                (s) => s.name.toLowerCase() === name.toLocaleLowerCase() &&
                Number(s.age) === Number(age) &&
                s.course.toLowerCase() === course.toLowerCase()
            );
            if(!ifAlreadyExists){
                setStudentsData([...studentsData,data]);
            }
            setName("");
            setAge("");
            setCourse("");
        }
        catch(err){
            setMessage("Error saving student");
            console.log(err);
        }
    };
    const fetchdata = async() => {
        try{
            const res=await axios.get("http://localhost:5000/students");
            setStudentsData(res.data);
        }
        catch(err){
            console.log("Error fetching students",err);
        }
    };
    return(
        <div style={{margin: "20px"}}>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Student Name: </label>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <br />
                <label>Age :</label>
                <input
                    type='Number'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <br />
                <label>Course: </label>
                <input
                    type='text'
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    required
                />
                <br />
                <button type='submit'>Submit</button>
            </form>
                {message && <p>{message}</p>}
                <h3>Saved Stduents</h3>
                <ul>
                    {studentsData.map((s,index) => (
                    <li key={index}>
                        {s.name} - {s.age} - {s.course}
                    </li>
                    ))}
                </ul>
        </div>
    )
};
export default AddStudent;