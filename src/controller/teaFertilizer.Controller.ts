import express from "express";
import teaFertilizerModel from "../models/fertilizer.model";
import CustomResponse from "../dtos/custom.response";
import fertilizerModel from "../models/fertilizer.model";
import multer from "multer";
import FertilizerModel from "../models/fertilizer.model";
import Teq_leavesModel from "../models/teq_leaves.model";



/*export const createFertilizer = async (req: express.Request, res: any) => {

    try {

        let req_body = req.body;


        let tea_fertilizer_model = new fertilizerModel({
            tea_fertilizer_type: req_body.tea_fertilizer_type,
            qty: req_body.qty,
            price: req_body.price,
        });

        await tea_fertilizer_model.save().then(r => {
            res.status(200).send(
                new CustomResponse(200, "Fertilizer created successfully.")
            )
        }).catch(e => {
            console.log(e)
            res.status(100).send(
                new CustomResponse(100, "Something went wrongs")
            )
        });

    } catch (error) {
        res.status(100).send("Error");
    }
};*/
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image');
export const createFertilizer = async (req: express.Request, res: any) => {
    try {
        // Use Multer to handle file upload
        upload(req, res, async (err: any) => {
            if (err) {
                console.log(err);
                return res.status(400).send('Error handling file upload');
            }

            const reqBody = req.body;

            // Convert the buffer to a base64-encoded string
            const image = req.file ? req.file.buffer.toString('base64') : '';

            // Create a new Fertilizer document
            const fertilizer = new FertilizerModel({
                tea_fertilizer_type: reqBody.tea_fertilizer_type,
                qty: reqBody.qty,
                price: reqBody.price,
                image: image,
            });

            // Save the document to MongoDB
            /*await fertilizer.save();

            res.status(200).send('Fertilizer created successfully.');*/
            await fertilizer.save().then(r => {
                res.status(200).send(
                    new CustomResponse(200, "Fertilizer created successfully.")
                )
            }).catch(e => {
                console.log(e)
                res.status(100).send(
                    new CustomResponse(100, "Something went wrongs")
                )
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};




export const getAllFertilizer = async (req: express.Request, res: express.Response) => {
    try {
        let fertilizer = await teaFertilizerModel.find();
        res.status(200).send(
            new CustomResponse(200, "Fertilizer are found successfully", fertilizer)
        )

    } catch (error) {
        res.status(100).send("Error");
    }
}

export const getFertilizerByType=async (req:express.Request,res:express.Response)=>{
    try {
        let tea_fertilizer_type:string=req.params.tea_fertilizer_type;
        let fertilizer_type:any=await FertilizerModel.findOne({tea_fertilizer_type:tea_fertilizer_type});

        if (!fertilizer_type){
            res.status(404).send(
                new CustomResponse(404,"Tea Fertilizer Type Not Found!")
            )
        }else {
            let type=await FertilizerModel.find({tea_fertilizer_type:fertilizer_type.id})
            res.status(200).send(
                new CustomResponse(200,"Tea Fertilizer Are Found successfully!",type,fertilizer_type)
            )
        }
    }catch (error){
        res.status(100).send("Error");
    }
}