import { StreamChat } from "stream-chat";
import {ENV} from "./env.js";
const  apiKey=ENV.STREAM_API_KEY;
const apiSecret=ENV.STREAM_API_SECRET;
if (!apiKey || !apiSecret) {
    console.log("Please provide stream api key and api secret");
    process.exit(1);
}
export const chatClient=StreamChat.getInstance(apiKey,apiSecret);
export const upsertStreamUser=async(userData)=>{
    try{
        await chatClient.upsertUser(userData);
        return userData
    }
    catch(error){
        console.log("Error upserting stream user",error);
    }
}
export const deleteStreamUser=async(userId)=>{
    try{
        await chatClient.deleteUser(userId);
        console.log("User deleted successfully");
    }
    catch(error){
        console.log("Error deleting stream user",error);
    }
}
//todo:add  another  method to generate token