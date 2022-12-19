const mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');




var Scope2energy = new mongoose.Schema({
   

    code: {
        type: String,
        required: true,
       
    },
    facility: {
        type: String,
        required: true,
        
    }
   ,co2: {
        type: String,
        required: true,
        
    },
    fuel: {
        type: String,
        required: true,
        
    },quantity: {
        type: String,
        required: true,
        
    }

});
Scope2energy.plugin(timestamps);


// createing model
const energydb = new mongoose.model("Scope2energys", Scope2energy);

module.exports = energydb;