import express from "express"
import {create,getAll} from '../controller/userController.js'
const route=express.Router();
route.post("/products",create);
route.get("/products",getAll);
export default route;