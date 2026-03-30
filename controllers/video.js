import * as db from "../db/queries.js"

const controller = {
    async getVideoGet(req, res) {
        const { videoId } = req.params

        try {
            const videoIdInt = parseInt(videoId)
            const video = await db.movie.get(videoIdInt)

            res.render("video", { video: video})
        } catch (err) {
            console.error(err)
        }

    }
}

export default controller