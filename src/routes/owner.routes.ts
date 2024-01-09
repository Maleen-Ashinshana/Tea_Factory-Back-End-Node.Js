import express from "express";
import * as TeaOwnerController from "../controller/teaOwner.Controller";


const router=express.Router();

router.post('/',TeaOwnerController.createNewTeaOwner)
router.get('/all',TeaOwnerController.getAllOwners)


export default router