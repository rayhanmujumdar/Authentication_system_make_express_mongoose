require('dotenv').config()
const express = require('express')
const middleware = require('../middleware/middleware')

const app = express()

// middleware
app.use(middleware)

module.exports = app