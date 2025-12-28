import  express from "express";
import { protecRoute } from "../Middelware/protectRoute.js";
import { createSession, endSession, getActiveSession, getMyRecentSessions, getSessionById, joinSession } from "../controllers/sessionController.js";
const  router=express.Router()
router.post("/",protecRoute,createSession)
router.get("/active",protecRoute,getActiveSession)
router.get("/my-recent",protecRoute,getMyRecentSessions)
router.get("/:id",protecRoute,getSessionById)
// /api/session/:id
router.post("/:id/join",protecRoute,joinSession)
router.post("/:id/end",protecRoute,endSession)


export default router