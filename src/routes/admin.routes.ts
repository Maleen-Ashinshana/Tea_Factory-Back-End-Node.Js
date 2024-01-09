import express from "express";
import * as AdminController from "../controller/admin.controller";


const router=express.Router();

router.post('/',AdminController.createNewAdmin)
router.post('/auth',AdminController.authAdmin)


export default router