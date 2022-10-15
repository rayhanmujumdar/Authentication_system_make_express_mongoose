const {Schema,model} = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        minLength: 4,
        maxLength: 20,
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
        minLength: [6,'Password must be 6 character'],
        validate: {
            validator: (pass) => {
                const regexPass = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                return regexPass.test(pass)
            },
            message: "Minimum six characters, at least one letter and one number"
        }
    }

})

const UserAuth = model("userSchema",userSchema)

module.exports = UserAuth