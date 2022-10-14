const bodyParser = require('body-parser')
const cors = require('cors')
const morgen = require('morgan')

const middleware = [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    cors(),
    morgen('dev')
]

module.exports = middleware