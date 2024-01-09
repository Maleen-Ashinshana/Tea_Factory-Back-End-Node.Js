import express from "express";
import * as UserController from "../controller/customer.controller";


const router=express.Router();

router.get('/all',UserController.getAllUser)
router.post('/',UserController.createNewUser)



export default router