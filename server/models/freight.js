const mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');



var fright = new mongoose.Schema({
   

    code: {
        type: String,
        required: true,
       
    },
    facility: {
        type: String,
        required: true,
        
    }
    ,
   
    distance: {
        type: String,
        required: true,
        
    }, weight: {
        type: String,
        required: true,
        
    }
    ,fuel: {
        type: String,
        required: true,
        
    },co2: {
        type: String,
        required: true,
        
    },
    category: {
        type: String,
        required: true,
        
    }

});
fright.plugin(timestamps);


// createing model
const frightdb = new mongoose.model("frights", fright);

module.exports = frightdb;