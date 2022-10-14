const notFoundHandler = (_req,_res,next) => {
    const errors = new Error("Resource Not Found")
    errors.status = 404
    next(errors)
}

const errorHandler = (errors,_req,res,_next) => {
    if(errors.status){
        return res.status(errors.status).json({
            message: errors.message
        })
    }
    res.status(500).json({
        message: "Something was wrong"
    })
}

module.exports = {
    notFoundHandler,
    errorHandler
}