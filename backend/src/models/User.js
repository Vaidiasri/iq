// yaha  par hmu user  modal  bana rahe hai
// phele S----->M
import  mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    profileImage:{
        type:String,
        default:""
    },
    clerkId:{
        type:String,
        required:true,
        unique:true

    }

},{timestamps:true}) // yaha hua schema define bhai node js m schema object  ke andar banta hai dekh raha hai vaibhav 😂
const User=mongoose.model("User",userSchema) // yaha par hua model define 
export default User