import { prisma } from "../lib/prisma.js"

const videos = {
    async add(name, url) {
        const video = await prisma.videos.create({
            data: {
                name: String(name),
                url: String(url)
            }
        })
        return video    
    },

    async getAll() {
        const videos = await prisma.videos.findMany()
        return videos
    },

    async delete(id) {
        const deleteVideo = await prisma.videos.delete({
            where: {
                id: Number(id)
            }
        })
        return deleteVideo
    }
}

export { videos }