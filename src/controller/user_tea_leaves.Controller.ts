import express from "express";

import CustomResponse from "../dtos/custom.response";
import * as SchemaType from "../types/SchemaTypes";
import jwt, {Secret} from "jsonwebtoken";

import bcrypt from "bcryptjs";
import UserTeaLeaves from "../models/user_tea_leaves.model";
import process from "process";
import {Types} from "mongoose";
import {ObjectId} from "mongoose";


export const saveTeaLeaves = async (req: express.Request, res: any) => {

    try {

        let req_body = req.body;
        let owner_id=res.tokenData.user._id;

        console.log("Request Body :",req_body);

       /* console.log("Request Body :",req_body);
        console.log(res)*/
       // console.log("Owner ID :",owner_id);

        let user_leavesModel = new UserTeaLeaves({
            data: req_body.data,
            leaves_type: req_body.leaves_type,
            qty: req_body.qty,
            price:req_body.price,
            owner:new Object(owner_id)
        });

        await user_leavesModel.save().then(r => {
            res.status(200).send(
                new CustomResponse(200, "Saved successfully.")
            )
        }).catch(e => {
            console.log(e)
            res.status(100).send(
                new CustomResponse(100, "Something went wrongs")
            )
        });

    } catch (error) {
        console.log(error)
        res.status(100).send("Error");

    }
}