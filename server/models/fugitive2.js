const mongoose = require('mongoose')
var timestamps = require('mongoose-timestamp')

var fugitive = new mongoose.Schema({
    person: {
        type: String,
        required: true,
       
    },
    email: {
        type: String,
        required: true,
       
    },

    date: {
        type: String,
        required: true,
       
    },
    gases:{
        type: String
        
    },
    code:{
        type: String
       
    },
    facility:{
        type: String
        
    },
    fuel:{
        type: String
       
    },
    quantity:{
        type: String
       
    },
    yesno:{
        type: String
       
    },
    code2:{
        type: String
        
    },
    facility2:{
        type: String

    },
    fire:{
        type: String

    },
    typegas:{
        type: String

    },
    capacity:{
        type: String

    },
    co2:{
        type: Number

    },
    co3:{
        type: Number

    }
})

fugitive.plugin(timestamps);
const fugitivetwo = new mongoose.model("fugitivetwos", fugitive);
module.exports=fugitivetwo;