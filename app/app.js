require('dotenv').config()
const express = require('express')
const middleware = require('../middleware/middleware')
const routes = require('../routes/health')
const {notFoundHandler,errorHandler} = require('../error/routeErrors')
const dbConnect = require('../db/dbConnect')

const app = express()

//* middleware
app.use(middleware)

//* route
app.use(routes)

//* error
app.use(notFoundHandler)
app.use(errorHandler)

// * Database connection
dbConnect().catch(e => console.log(e))

module.exports = app