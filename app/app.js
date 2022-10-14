require('dotenv').config()
const express = require('express')
const middleware = require('../middleware/middleware')
const routes = require('../routes/health')

const app = express()

//* middleware
app.use(middleware)

//* route
app.use(routes)

module.exports = app