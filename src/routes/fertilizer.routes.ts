import express from "express";
import * as teaFertilizerController from "../controller/teaFertilizer.Controller";


const router=express.Router();
router.post('/',teaFertilizerController.createFertilizer);
router.get('/all',teaFertilizerController.getAllFertilizer);
router.get('/:tea_fertilizer_type',teaFertilizerController.getFertilizerByType);


export  default router;