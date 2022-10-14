require('dotenv').config()
const express = require('express')
const middleware = require('../middleware/middleware')
const routes = require('../routes/health')
const {notFoundHandler,errorHandler} = require('../error/routeErrors')

const app = express()

//* middleware
app.use(middleware)

//* route
app.use(routes)

//* error
app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app