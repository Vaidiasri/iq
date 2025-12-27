import { requireAuth } from "@clerk/express";
import User from "../models/User.js";


export const protecRoute=[
    
    requireAuth({signInUrl:"/sign-in",signUpUrl:"/sign-up"}),
    async(req,res,next)=>{
        try{
          const  clerkId=req.auth.userId;
          if(!clerkId){
            return res.status(401).json({message:"Unauthorized"})
          }  
          // find user in database
          const user=await User.findOne({clerkId})
          if(!user){
            return res.status(404).json({message:"User not found"})
          }
          // attach user to request object
          req.user=user;
          next();
        }
        catch(error){
            return res.status(500).json({message:"Internal Server Error"})
        }
    }
]