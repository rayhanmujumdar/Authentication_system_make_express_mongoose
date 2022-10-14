const mongoose = require('mongoose')

async function dbConnect (){
    try{
        await mongoose.connect('mongodb://localhost:27017/authentication')
        console.log('Mongoose is connect')
    }
    catch(e){
        console.log(e)
    }
}

// dbConnect().catch((err) => console.log(err))
module.exports = dbConnect