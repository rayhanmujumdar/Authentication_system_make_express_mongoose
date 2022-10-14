const {Schema,model} = require('mongoose')

const personSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    single: Boolean
})

const Person = model("personSchema",personSchema)

module.exports = Person