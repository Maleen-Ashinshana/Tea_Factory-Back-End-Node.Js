import express from "express";
import * as teaLeavesController from "../controller/teaLeaves.Controller";


const router=express.Router();

router.post('/',teaLeavesController.createTeaLeavesType);
router.get('/all',teaLeavesController.getAllLeaves);
router.get('/:tea_leaves_type',teaLeavesController.getLeavesByLeavesType);
router.delete('/deleteLeaves',teaLeavesController.getLeavesByLeavesType);
router.put('/updateLeaves',teaLeavesController.updateLeaves);


export default router