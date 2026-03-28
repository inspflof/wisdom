import * as db from "../db/queries.js"

const indexController = {
    async getIndexGet(req, res) {
        try {
            const response = await fetch("https://api.imdbapi.dev/titles")
            const moviesDataJson = await response.json()
            const moviesData = moviesDataJson.titles

            res.render("index", { movies: moviesData})
        } catch (err) {
            console.error(err)
        }

    }
}

export default indexController