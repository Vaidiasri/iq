import express from "express";
import { getStreamToken } from "../controllers/chatControllers.js";
import { protecRoute } from "../Middelware/protectRoute.js";
const router = express.Router();

router.get("/token", protecRoute, getStreamToken);
export default router;