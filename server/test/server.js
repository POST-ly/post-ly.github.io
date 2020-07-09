const http = require("http")
const fs = require("fs")
const path = require("path")

const PORT = 4000
const  log = console.log

const server = http.createServer((req, res) => {
    const url = req.url
    switch (url) {
        case "/":
            fs.readFile(path.resolve(__dirname, 'index.html'), (err, data) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200)
                res.end(data)
            })
            break;
    
        default:
            break;
    }
})

server.listen(PORT, () => console.log("Listening on port: " + PORT))