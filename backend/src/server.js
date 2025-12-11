import  express from 'express'
import path from 'path'
import { ENV } from './lib/env.js'
const  app=express()
const __dirname = path.resolve();

console.log(ENV.PORT)

app.get("/health",(req,res)=>{
    res.status(200).json({mess:"api is up and running"})
})

if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/project/dist")));
    
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/project/dist", "index.html"));
    });
}
app.listen(ENV.PORT,()=>{
    console.log(`Server is Running on ${ENV.PORT}`)
})