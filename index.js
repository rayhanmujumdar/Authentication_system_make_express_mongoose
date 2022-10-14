require('dotenv').config()
const app = require('./app/app')
const http = require('http')

const port = process.env.PORT || 5000

const server = http.createServer(app)

server.listen(port,() => {
    console.log(`listening port is ${port}`)
})
