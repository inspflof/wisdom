import { Router } from "express";
const route = Router()

route.get("/", (req, res) => res.send("hello"))

import videoRoute from "./video.js"
route.use("/video", videoRoute)

export default route