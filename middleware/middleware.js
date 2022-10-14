const express = require('express')
const bodyParser = require('express').bodyParser()
const cors = require('cors')
const morgen = require('morgan')
console.log(bodyParser)

const middleware = [
    express.json(),
    bodyParser.urlencoded({ extended: false }),
    cors(),
    morgen('dev')
]

module.exports = middleware