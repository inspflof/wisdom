import { Router } from "express";
const route = Router()

import videoController from "../controllers/video.js"
route.get("/", videoController.getVideoGet)

export default route