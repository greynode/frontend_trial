const mongoose = require("mongoose");

const validator = require("validator");


var subuserSchema = new mongoose.Schema({
   // name,user,currency, country, pointofcontact,productservices,id,employee,website,activity,address

    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("not valid email")
            }
        }
    },
    pass: {
        type: String,
        required: true,
        
    }
});








// createing model
const subuserdb = new mongoose.model("subusers", subuserSchema);

module.exports = subuserdb;