import * as db from "../db/queries.js"

const controller = {
    async getVideoGet(req, res) {
        res.render("video")
    }
}

export default controller