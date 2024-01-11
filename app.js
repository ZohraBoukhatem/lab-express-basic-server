// IMPORT PACKAGES
const express = require("express")
const logger = require("morgan")
const projects = require("./data/projects.json")


// CREATE EXPRESS APP
const app = express()

// MIDDLEWARE
app.use(express.static("public"))
app.use(express.json())
app.use(logger("dev"))

// ROUTES
app.get("/", (req, res, next) => {
   res.sendFile(__dirname + "/views/home.html")
})

app.get("/blog", (req, res, next) => {
    res.sendFile(__dirname + "/views/blog.html")
})

app.get("/api/projects", (req, res, next) => {

    res.json(projects)
})

app.get("/*", (req, res, next) => {
    res.status(404).sendFile(__dirname + "/views/not-found.html")
})


// START THE SERVER
app.listen(5005, () => {console.log("this is the server")})