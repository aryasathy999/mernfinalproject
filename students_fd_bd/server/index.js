import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import route from './routes/userRoute.js'
dotenv.config();
const app=express();
const PORT=process.env.PORT || 8000;
const MONGOURL=process.env.MONGO_URL;
app.use(cors({origin: "http://localhost:3000"}));
app.use(bodyParser.json());
//DB connection
mongoose.connect(MONGOURL)
.then(() => {
    console.log("connection successful");
    app.listen(PORT, () => {
        console.log(`server running on port: ${PORT}`);
    });
})
.catch((error) => console.log("some error", error));
//routes
app.use("/",route);