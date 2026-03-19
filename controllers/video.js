import * as db from "../db/queries.js"

const videoController = {
    async getVideoGet(req, res) {
        res.render("video")
    }
}

export default videoController