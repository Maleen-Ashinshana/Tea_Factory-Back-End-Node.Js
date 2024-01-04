import {ObjectId} from "mongoose";

export interface IAdmin extends Document {
    username: string,
    email: string,
    password: string
}

export interface IUser extends Document {
    username: string,
    usertype: string,
    branch: string,
    email: string,
    contact_number1: number,
    contact_number2: number
}
export interface ITeaLeaves extends Document{
    tea_leaves_type:string,
    qty:string,
    price:number
}
export interface ITeaFertilizer extends Document{
    tea_fertilizer_type:string,
    qty:string,
    price:number
}
/*User  dila thiyena the kola pramayana add kirimata*/
export interface IUserTeaLeaves extends Document{
    data:string,
    leaves_type:string,
    qty:number,
    price:number

}

/*User  order karala thiyena the kola pramayana add kirimata*/
export interface IUserOderTeaPowder extends Document{
    data:string,
    powder_type:string,
    qty:string,
    price:number

}
/*User  order karala thiyena pohora add kirimata*/
export interface IUserOderFertilizer extends Document{
    data:string,
    fertilizer_type:string,
    qty:string,
    price:number

}