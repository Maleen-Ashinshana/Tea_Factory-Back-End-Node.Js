import mongoose from "mongoose";
import * as SchemaType  from "../types/SchemaTypes";

const fertilizerSchema=new mongoose.Schema<SchemaType.IUserOderFertilizer>({

    date:{type: Date, required: true, default: Date.now()},
    fertilizer_type:{type:String,required:true},
    qty:{type:Number,required:true},
    price:{type:Number,required:true},
})
const TeaOwnerModel=mongoose.model('UserOderFertilizer',fertilizerSchema);
export default fertilizerSchema;