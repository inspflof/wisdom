import { Router } from "express";
const route = Router()

import indexController from "../controllers/index.js"
route.get("/", indexController.getIndexGet)

import videoRoute from "./video.js"
route.use("/video", videoRoute)

export default route