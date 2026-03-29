import * as db from "../db/queries.js"

const controller = {
    async getMovieGet(req, res) {
        const { movieId } = req.params

        try {
            const response = await fetch(`https://api.imdbapi.dev/titles/${movieId}`)
            const moviesDataJson = await response.json()
            console.log(moviesDataJson)

            res.render("movies/movie", { movie: moviesDataJson})
        } catch (err) {
            console.error(err)
        }
    }
}

export default controller