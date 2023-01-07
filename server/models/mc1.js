const mongoose = require("mongoose");





var mcdata = new mongoose.Schema({
   
//   road,nonroad,rail,water,air
email: {
    type: String,
    required: true,
   
},date: {
    type: String,
    required: true,
   
},person: {
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


// createing model
const Mcdb = new mongoose.model("mcdatas", mcdata);

module.exports = Mcdb;