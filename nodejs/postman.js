const express=require("express");
const bp=require('body-parser');
const app=express();
const port=3001;
app.use(bp.urlencoded({extended: false}))
app.use(bp.json());
// users=[{
//     "id":2,"name":"Manju K"
// }]
const users = [
 { id: 1, name: 'Dhanya' },
 { id: 2, name: 'Veena' },
 ];

// users=[];
// app.post("/login",function(req,res)
// {
//     res.send("it is a login page");
// })
// app.post("/login",function(req,res){
//     res.send(`${req.body.Name}
//     ${req.body.Hobby}`);
// });
// app.post('/users', (req,res) => {
//     const {id, name}=req.body;
//     if(!id || !name){
//         return res.status(400).send('ID and Name are required');
//     }
//     users.push({id, name});
//     res.send({message: 'User added successfully', users});
// });
// app.put('/users/:id', (req,res) => {
//     const userId=parseInt(req.params.id); //get the id value from the URL
//     const {name}=req.body; //req.body contains the data sent by the client (e.g,. {"name"})
//     const user=users.find(u => u.id === userId); //u represents the user object
//     if(!user){
//         return res.status(404).send('User not found');
//     }
//     user.name=name || user.name //name send by client, or user.name (previous value)
//     res.send({message: 'User updated successfully', users});
// });
// app.delete('/users/:id', (req, res) => {
//  const userId = parseInt(req.params.id);
//  const index = users.findIndex(u => u.id === userId);
//  if (index === -1) {
//  return res.status(404).send('User not found');
//  }
//  users.splice(index, 1);
//  res.send({ message: 'User deleted successfully', users });
//  });
app.get('/users', (req, res) => {
    res.send(users);
});
//Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});