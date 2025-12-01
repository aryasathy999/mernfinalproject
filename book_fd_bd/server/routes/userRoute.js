import express from "express"
import {create, getAll, update, deleteUser} from '../controller/userController.js';

const route=express.Router();
route.post("/books",create);
route.get("/books", getAll);
route.put("/books/:id", update);
route.delete("/books/:id", deleteUser);

export default route;