const {Schema,model} = require('mongoose')
const userSchema = new Schema({
    username: {
        type: String,
        minLength: [4,"minimum length is 4"],
        maxLength: [20,"maximum length is 20"],
        trim: true,
        require: [true,"User Name is required"]
    },
    email: {
        type: String,
        require: [true,"Email is must required"],
        validate: {
            validator: (email) => {
                let regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/
                return regexEmail.test(email)
            },
            message: "Email Validation fail"
        }
    },
    age: {
        type: Number,
        min: [18,"Minimum age will be 18"],
        require: [true,"Age must be required"]
    },
    married: {
        type: Boolean,
        default: false,
        require: [true,"married status must be required"]
    },
    password: {
        type: String,
        require: [true,"password must be required"]
    }
})

const UserAuth = model("userSchema",userSchema)

module.exports = UserAuth