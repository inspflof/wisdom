import * as db from "../db/queries.js"

const controller = {
    async getMovieGet(req, res) {
        const { movieId } = req.params

        try {
            const response = await fetch(`https://api.imdbapi.dev/titles/${movieId}`)
            const moviesDataJson = await response.json()

            const movie = await db.movie.get(moviesDataJson.id)

            res.render("movies/movie", { movie: moviesDataJson, localMovie: movie})
        } catch (err) {
            console.error(err)
        }
    },

    async addMoviePost(req, res) {
        const { movieId } = req.params
        const { url, movieTitle } = req.body

        try {
            const movie = await db.movie.add(movieId, movieTitle, url)

            res.redirect(`/movie/${movieId}`)
        } catch (err) {
            console.error(err)
        }
    }
}

export default controller