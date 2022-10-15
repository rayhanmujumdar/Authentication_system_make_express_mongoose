//* testing my GET POST PATCH DELETE data
const bcrypt = require('bcrypt');
const saltRounds = 4;
const myPlaintextPassword = 'Mobile@123';
const someOtherPlaintextPassword = 'Mobile@123';
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
        // result == false
        console.log("result" ,result)
        console.log("Error",err)
    });
});