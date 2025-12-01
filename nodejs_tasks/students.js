const express=require('express');
const bp=require('body-parser');
const app=express();
const port=3000;
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
const students=[
    {id:1, name:"Arya"},
    {id:2, name:"Dhivya"},
    {id:3, name:"Henry"},
    {id:4, name:"Mugesh"},
    {id:5, name:"Prince Solomon"}
];
function findStudentById(id){
    return students.find(emp => emp.id === id);
}
app.get('/student', (req,res) => {
    const id=parseInt(req.params.id);
    const stdt=findStudentById(id);
    res.send(stdt || "no student found");
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
