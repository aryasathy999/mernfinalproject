const express=require('express');
const bp=require('body-parser');
const app=express();
const port=3000;
//Middleware to parse form data and json
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
let employees = [
    { id:1, name:"Arya", position:"Developer", salary:60000 },
    { id:2, name:"John", position:"Manager", salary:80000 },
    { id:3, name:"Maya", position:"Designer", salary:55000 },
    { id:4, name:"Steve", position:"Developer", salary:62000 },
];
function findEmployeeById(id){
    return employees.find(emp => emp.id === id);
}
function findEmployeeByName(name){
    return employees.find(emp => emp.name.toLowerCase() === name.toLowerCase());
}
function findEmployeeByPosition(position){
    return employees.find(emp => emp.position.toLowerCase() === position.toLowerCase());
}
function increaseSalaryById(id,amount){
    const employee=employees.find(emp => emp.id === id);
    if(employee){
        employee.salary=employee.salary+amount;
        return employee;
    }
    else{
        return null;
    }
}
app.get('/employee/id/:id', (req,res) => {
    const id=parseInt(req.params.id);
    const emp=findEmployeeById(id);
    res.send(emp || "Employee not found");
});
app.get('/employee/name/:name', (req,res) => {
    const name=req.params.name;
    const emp=findEmployeeByName(name);
    res.send(emp || 'Employee not found');
});
app.get('/employee/position/:position', (req,res) => {
    const position=req.params.position;
    const empList=findEmployeeByPosition(position);
    res.send(empList.length > 0 ? empList : "no employess found");
});
app.post('/employee/increase', (req,res) => {
    console.log(req.body);
    const id=parseInt(req.body.id);
    const amount=parseFloat(req.body.amount);
    const updatedEmp=increaseSalaryById(id,amount);
    res.send(updatedEmp || "Employee not found or invalid input");
});
app.get('/employees', (req,res) => {
    res.send(employees);
});
//Starting server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});