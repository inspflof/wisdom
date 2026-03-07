import "./config/env.js"
import express from "express"
import path from "path"

const __dirname = import.meta.dirname
const port = process.env.PORT || 3000

const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

app.listen(port, (err) => {
    if(err){
        throw err
    }
    console.log(`App listening on ${port}`)
})