import "./config/env.js"
import express from "express"
import path from "path"

const __dirname = import.meta.dirname
const port = process.env.PORT || 3000

const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.urlencoded({extended: false}))

import { configureSessions } from "./config/session.js"
configureSessions(app)

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

app.use('/scripts', express.static(path.join(__dirname, 'node_modules/video.js/dist')))

import indexRoute from "./routes/index.js"
app.use("/", indexRoute)

app.listen(port, (err) => {
    if(err){
        throw err
    }
    console.log(`App listening on ${port}`)
})