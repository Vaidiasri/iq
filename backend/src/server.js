import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import { serve } from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";
import {clerkMiddleware} from "@clerk/express"
const app = express();
const __dirname = path.resolve();

console.log(ENV.PORT);
// bhai thode middelware add karle
app.use(express.json())
// credentials true => means  server  allows a  browser to includes cookieson request
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use(clerkMiddleware()) // this add auth field to request object 

app.get("/health", (req, res) => {
  res.status(200).json({ mess: "api is up and running" });
});
// protected route 
// app.get("/video-call",protecRoute,(req,res)=>{
//   try{
//     res.status(200).json({message:"Video call"})  
//   }
//   catch(error){
//     res.status(500).json({message:"Internal Server Error"})
//   }
// })

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/project/dist")));

  app.get(/.*/, (req, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend/project/dist", "index.html")
    );
  });
}

// bhai industry standard  k  hisbse  hum ek function m database  connection aur server start karege
const protocol = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(`Server is Running on ${ENV.PORT}`);
    });
  } catch (err) {
    console.log("Error to start  the  server ");
  }
};
protocol(); 
