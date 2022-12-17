const mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');



var mobileSchema = new mongoose.Schema({
   

    code: {
        type: String,
        required: true,
       
    },
    facility: {
        type: String,
        required: true,
        
    }
    ,
   
    quantity: {
        type: String,
        required: true,
        
    }
    ,literdistance: {
        type: String,
        required: true,
        
    },fuel: {
        type: String,
        required: true,
        
    },co2: {
        type: String,
        required: true,
        
    },
    category: {
        type: String,
        required: true,
        
    },subcat: {
        type: String,
        required: true,
        
    }

});
mobileSchema.plugin(timestamps);


// createing model
const mobiledb = new mongoose.model("mobilecombustions", mobileSchema);

module.exports = mobiledb;