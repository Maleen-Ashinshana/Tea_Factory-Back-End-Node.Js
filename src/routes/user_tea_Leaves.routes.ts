import express from "express";
import * as useTeaLeaves from "../controller/user_tea_leaves.Controller";
import * as Middleware from "../middlewares";

const router=express.Router();

router.post('/save',Middleware.verifyToken,useTeaLeaves.saveTeaLeaves)




export default router