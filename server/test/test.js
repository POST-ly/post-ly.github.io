/** require dependencies */
const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const path = require('path')

const app = express()
let port = 5000 || process.env.PORT
const log = console.log

/** set up middlewares */
app.use(cors())

app.use((req, res, next) => {
    log("My cors")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT")
    res.setHeader("Access-Control-Allow-Credentials", "true")
    res.setHeader("Access-Control-Allow-Headers", "content-type")
    res.setHeader("Accept", "application/json, text/plain, */*")        
    next()
})

app.use(bodyParser.json({limit: '50mb'}))
app.use(helmet())

app.post("/api/user", (req, res, next) => {
    log("/api/user", " POST")
    res.send("/api/user POST")
    next()
})

app.get("/api/users", (req, res, next) => {
    log("GET /api/users")
    res.send("Hello GET")
    next()
})

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});