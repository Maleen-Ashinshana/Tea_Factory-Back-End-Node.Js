import  dotenv from "dotenv";
dotenv.config();
/**/
import express from  'express';
import bodyParser from  "body-parser"
import mongoose from "mongoose";
import * as process from "process";

/**/
const app=express();

// @ts-ignore
app.use(bodyParser.json())

interface User {
    username: string,
    fName: string,
    lName: string,
    password: string
}

let user:User[]=[];

mongoose.connect(process.env.MONGO_URL as string)
const db=mongoose.connection
db.on('error',(error)=>{
    console.log("DB Connection Error : ",error)
})
db.on('open',()=>{
    console.log("DB Connected Successfully")
})



app.get('/user/all',(req:express.Request,res:express.Response)=>{

/*let  data={
    id:"ksajkhj",
    name:"Maleen",
    email:"lkcsmkaj"
}*/

 res.send(user)
})

app.post('/user',(req:express.Request,res:express.Response)=>{
    const body= req.body;
    console.log(body)

    user.push(body)

    res.send("Ok")
})
app.listen(8080,()=>{
    console.log("server Started on port 8080")
})