const routes = require('express').Router()
const status = require('./routes')

routes.get('/health', (_req,res) => {
    res.status(200).json({
        message: "success"
    })
})

routes.use('/api/v1/auth',status)

module.exports = routes