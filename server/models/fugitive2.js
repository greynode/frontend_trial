const mongoose = require('mongoose')
var timestamps = require('mongoose-timestamp')

var fugitive = new mongoose.Schema({

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
        type: String

    },
    co3:{
        type: String

    }
})

fugitive.plugin(timestamps);
const fugitivedb = new mongoose.model("fugitivetwos", fugitive);
module.exports=fugitivedb;