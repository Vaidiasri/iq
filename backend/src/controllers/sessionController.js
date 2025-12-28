import Session from "../models/session.js";
import {chatClient, streamClient} from "../lib/stream.js"
export async function createSession(req,res){
    try{
        const {problem,difficulty}=req.body
        const userId=req.user.id
        const clerkId=req.user.clerkId
        if(!problem||!difficulty){
            return res.status(400).json({message:"Problem and difficulty are required"})
        }else{
            // generate a uniuqe  call id  for stream video call
            const callId=`session_${Date.now()}_${Math.random().toString(36).substring(2,8)}`
            // create session in database 
            const session=await Session.create({
                problem:problem,
                difficulty:difficulty,
                host:userId,
                clerkId:clerkId,
                callId:callId
            })
            // create session in stream
            await streamClient.video.call("default",callId).getOrCreate({
                data:{
                    created_by_id:clerkId,
                    custom:{problem,difficulty,session_id:session._id.toString()}
                }
            })

        }
        // chat messaging
        chatClient.channel("messaging",callId,{
            name:`${problem} Session`,// like if it is two sum to it will -----> two sum session
            created_by_id:clerkId,
            members:[clerkId],
            
        })
        await channel.create()
        return res.status(201).json({session})
        
    }catch(error){
        return res.status(500).json({message:"Internal Server Error"})

    }
}
export async function getActiveSession(_,res){
    try{
        const session=await Session.findOne({status:"active"}).populate("host","name profileImage").sort({createdAt:-1}).limit(20)

        return res.status(200).json({session})
        

    }catch(error){
        return res.status(500).json({message:"Internal Server Error"})
    }
    
}
export async function getMyRecentSessions(req,res){
    try{
        // get session where user is  host or participant
       const userId=req.user._id
      const session= await Session.find({status:"completed",
        $or:[{host:userId},{participant:userId}]
       }).sort({createdAt:-1}).limit(20)
       return res.status(200).json({session})

    }catch(error){
        return res.status(500).json({message:"Internal Server Error"})
    }
    
}
export async function getSessionById(req,res){
    try{
        const id =req.params.id
        const session=await Session.findById(id).populate("host","name profileImage").populate("participant","name profileImage")
        if(!session){
            return res.status(404).json({message:"Session not found"})
        }
        return res.status(200).json({session})

    }catch(error){
        return res.status(500).json({message:"Internal Server Error"})
    }
    
}
export async function joinSession(req,res){
    try{
        const {id}=req.params
        const userId=req.user._id
        const clerkId=req.user.clerkId
        const session=await Session.findById(id)
        if(!session){
            return res.status(404).json({message:"Session not found"})
        }
        if(session.host.toString()===userId.toString()){
            return res.status(400).json({message:"You cannot join your own session"})
        }
        if(session.participant){
            return res.status(400).json({message:"Session is already joined"})
        }
        session.participant=userId
        await session.save()
        const channel=await chatClient.channel("messaging",session.callId,{
            name:`${session.problem} Session`,// like if it is two sum to it will -----> two sum session
            created_by_id:clerkId,
            members:[clerkId],
            
        })
        await channel.create()
        return res.status(200).json({session})

        

    }catch(error){
        return res.status(500).json({message:"Internal Server Error"})

    }
    
}
export async function endSession(req,res){
    try{
        const {id}=req.params
        const userId=req.user._id
        const clerkId=req.user.clerkId
        const session=await Session.findById(id)
        if(!session){
            return res.status(404).json({message:"Session not found"})
        }
        if(session.host.toString()!==userId.toString()){
            return res.status(400).json({message:"You cannot end this session"})
        }
        session.status="completed"
        await session.save()
        const channel=await chatClient.channel("messaging",session.callId)
        await channel.delete()
        return res.status(200).json({session})

    }catch(error){
        return res.status(500).json({message:"Internal Server Error"})
    }
    
}

