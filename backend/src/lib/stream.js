import { StreamChat } from "stream-chat";
import {StreamClient} from '@stream-io/node-sdk'
import {ENV} from "./env.js";
const  apiKey=ENV.STREAM_API_KEY;
const apiSecret=ENV.STREAM_API_SECRET;
if (!apiKey || !apiSecret) {
    console.log("Please provide stream api key and api secret");
    process.exit(1);
}
export const chatClient=StreamChat.getInstance(apiKey,apiSecret);// this is for chat messaging
export const streamClient=new StreamClient(apiKey,apiSecret);// this is for video call
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
