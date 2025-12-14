import mongoose from 'mongoose'// mongoose import kia database  se  connection bane ke  liye 
import {ENV} from "./env.js" // yaha se database  ka url le aae 
export  const connectDB=async()=>{ // ek async function banaya because data base  humesha kahi aur hota  hai
    try{ // try aue ctach block lagaya  
        const connection = await mongoose.connect(ENV.DATABASE_URL)
        console.log("Connected sucessfully vaibhav", connection.connection.host)
    } catch(err){
        console.log(err)
        process.exit(1) // 0 matlab connection ban gaya 1  mtlab bro fail ho gaya 
    }

}