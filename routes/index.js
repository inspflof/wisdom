import { Router } from "express";
const route = Router()

import indexController from "../controllers/index.js"
route.get("/", indexController.getIndexGet)

import videoRoute from "./video.js"
route.use("/video", videoRoute)

import movieController from "./movie.js"
route.use("/movie", movieController)

export default route