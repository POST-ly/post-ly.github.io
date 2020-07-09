/** require dependencies */
const express = require("express")
const routes = require('./routes/')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const path = require('path')

const app = express()
const router = express.Router()
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/postly"

/** connect to MongoDB datastore */
try {
    /*mongoose.connect(url, {
        //useMongoClient: true
    })*/    
} catch (error) {
    
}

let port = 5000 || process.env.PORT

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
/*app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'localhost');
  next();
});
*/
app.use(bodyParser.json({limit: '50mb'}))
app.use(helmet())

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, './../src/index.html'));
});

app.get("/js", (request, response) => {
    response.sendFile(path.join(__dirname, './app.js'));
});
app.get("/pdf", (request, response) => {
    response.sendFile(path.join(__dirname, './app.pdf'));
});

app.get("/jpg", (request, response) => {
    response.sendFile(path.join(__dirname, './app.jpg'));
});

app.get("/mp4", (request, response) => {
    response.sendFile(path.join(__dirname, './app.mp4'));
});

app.use('/css', express.static(path.join(__dirname,'./../src/css')))
app.use('/js', express.static(path.join(__dirname,'./../src/js')))
app.use('/fonts', express.static(path.join(__dirname,'./../src/fonts')))

app.use('/api', router)

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, './../src/index.html'));
});

// app.use('/api', router)


/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});