import { Router } from "express";
const route = Router()

import movieController from "../controllers/movies.js"
route.get("/:movieId", movieController.getMovieGet)

route.post("/:movieId", movieController.addMoviePost)

export default route