const mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');



var fugitiveSchema = new mongoose.Schema({
   

    code: {
        type: String,
        required: true,
       
    },
    facility: {
        type: String,
        required: true,
        
    }
    ,
   
    i: {
        type: String,
        required: true,
        
    }
    ,f: {
        type: String,
        required: true,
        
    },g: {
        type: String,
        required: true,
        
    },h: {
        type: String,
        required: true,
        
    },
    j: {
        type: String,
        required: true,
        
    },co2: {
        type: String,
        required: true,
        
    },refrigeration: {
        type: String,
        required: true,
        
    },refrigerant: {
        type: String,
        required: true,
        
    }

});
fugitiveSchema.plugin(timestamps);


// createing model
const fugitiveDB = new mongoose.model("fugitives", fugitiveSchema);

module.exports = fugitiveDB;