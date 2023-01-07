const mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');




var mcdata = new mongoose.Schema({
   
//   road,nonroad,rail,water,air
person: {
    type: String,
    required: true,
   
},
    road: {
        type: String,
        required: true,
       
    },
    nonroad: {
        type: String,
        required: true,
        
    }
   ,rail: {
        type: String,
        required: true,
        
    },
    water: {
        type: String,
        required: true,
        
    },air: {
        type: String,
        required: true,
        
    }

});
mcdata.plugin(timestamps);


// createing model
const Mcdb = new mongoose.model("mcdatas", mcdata);

module.exports = Mcdb;