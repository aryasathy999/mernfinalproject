// const express = require("express")
// const path = require("path")
// const bcrypt = require("bcrypt");
// const app = express();
// const collection = require("./config");  // this line import from config.js
// const { PassThrough } = require("stream");
// // Convert data into json format
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));
// app.set("view engine", "ejs");
// app.get("/", (req, res)=>{
//     res.render("Login");
// })
// app.get("/Signup", (req, res)=>{
//     res.render("Signup");
// })
// app.get("/Home", (req,  res)=>{
//     res.render("Home");
// })
// app.post("/Signup", async (req, res)=> {
//     const data = {
//         name: req.body.username ,  //  Attribute from signup page
//         password : req.body.password
//     }

//     const userdata = await collection.insertMany(data);
//     console.log(userdata);
// })
// const port =5000;
// app.listen((port),()=>{
//     console.log(`Server running at http://localhost:${port}`);
// })

// const express = require("express");
// const path = require("path");
// const bcrypt = require("bcrypt");
// const app = express();
// const collection = require("./config");  // this line imports from config.js
// const { PassThrough } = require("stream");
// // Convert data into json format
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// // Set EJS as the view engine
// app.set("view engine", "ejs");
// // Point to the correct views folder (one level above src)
// app.set("views", path.join(__dirname, "..", "views"));
// // Routes
// app.get("/", (req, res) => {
//     res.render("Login");
// });
// app.get("/Signup", (req, res) => {
//     res.render("Signup");
// });
// app.get("/Home", (req, res) => {
//     res.render("Home");
// });
// app.post("/Signup", async (req, res) => {
//     const data = {
//         name: req.body.username,  // Attribute from signup page
//         password: req.body.password
//     };
//     const userdata = await collection.insertMany(data);
//     // console.log(userdata);
//     if(userdata){
//         res.send("Already exists");
//     }
//     else{
//         //Hash Password
//         const secret=50;
//         const hashedPwd=await bcrypt.hash(data.password,10);
//         data.password=hashedPwd;
//         const userdata=await collection.insertMany(data);
//         console.log(userdata);
//     }
// });
// //Login
// app.post("/Login",async (req,res) => {
//     try{
//         const check=await collection.findOne({name: req.body.username});
//         if(!check)
//         {
//             res.send("user does not exist")
//         }
//         const isPwd=await bcrypt.compare(req.body.password, check.password);
//         if(isPwd)
//         {
//             res.render("Home")
//         }
//         else
//         {
//             res.send("Password incorrect")
//         }
//     }
//     catch{
//         res.send("Wrong detail")
//     }
// })

// const port = 5000;
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const app = express();
const collection = require("./config"); // Mongo collection object
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
// Pages
app.get("/", (req, res) => res.render("Login"));
app.get("/Login", (req, res) => res.render("Login"));
app.get("/Signup", (req, res) => res.render("Signup"));
app.get("/Home", (req, res) => res.render("Home"));
// Signup
app.post("/Signup", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        //Make sure we check exact field name stored in MongoDB
        const existingUser = await collection.findOne({ name: username });
        if (existingUser) {
            return res.send("Already exists");
        }
        // Hash password
        const hashedPwd = await bcrypt.hash(password, 10);
        // Insert new user
        const newUser = { name: username, password: hashedPwd };
        await collection.insertOne(newUser);
        console.log("User registered:", newUser);
        res.send("Signup successful. You can now login.");
    } catch (err) {
        console.error(err);
        res.send("Error during signup");
    }
});
// Login
app.post("/Login", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const check = await collection.findOne({ name: username });
        if (!check) {
            return res.send("User does not exist");
        }
        const isPwd = await bcrypt.compare(password, check.password);
        if (isPwd) {
            res.render("Home");
        } else {
            res.send("Password incorrect");
        }
    } catch (err) {
        console.error(err);
        res.send("Wrong detail");
    }
});
const port = 5000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
