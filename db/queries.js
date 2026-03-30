import { prisma } from "../lib/prisma.js"

const movie = {
    async add(imdbId, name, url) {
        const movie = await prisma.movies.create({
            data: {
                name: String(name),
                imdbId: String(imdbId),
                url: String(url)
            }
        })
        return movie    
    },

    async getAll() {
        const movies = await prisma.movies.findMany()
        return movies
    },

    async get(id) {
        const movie = await prisma.movies.findUnique({
            where: { id: id },
        })
        return movie
    },

        async getImdb(imdbId) {
        const movie = await prisma.movies.findUnique({
            where: { imdbId: imdbId },
        })
        return movie
    },

    async delete(id) {
        const deleteMovie = await prisma.movies.delete({
            where: {
                id: Number(id)
            }
        })
        return deleteMovie
    }
}

export { movie }