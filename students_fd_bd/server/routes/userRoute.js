import express from "express"
import {create,getAll} from '../controller/userController.js'
const route=express.Router();
route.post("/students",create);
route.get("/students",getAll);
export default route;