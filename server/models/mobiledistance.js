const mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');



var mobiledistance = new mongoose.Schema({
   

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
        
    },subcat: {
        type: String,
        required: true,
        
    }

});
mobiledistance.plugin(timestamps);


// createing model
const mobiledistancedb = new mongoose.model("mobiledistances", mobiledistance);

module.exports = mobiledistancedb;