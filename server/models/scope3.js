//name,product,time,disposal,asset,period,franchisename,franchiseperiod,investment,location
const mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');




var Scope3energy = new mongoose.Schema({
   

    name: {
        type: String,
        required: true,
       
    },
    product: {
        type: String,
        required: true,
        
    }
   ,franchisename: {
        type: String,
        required: true,
        
    },
    franchiseperiod: {
        type: String,
        required: true,
        
    },investment: {
        type: String,
        required: true,
        
    },location: {
        type: String,
        required: true,
        
    }
    ,time: {
        type: String,
        required: true,
        
    }
    ,disposal: {
        type: String,
        required: true,
        
    }
    ,asset: {
        type: String,
        required: true,
        
    },period: {
        type: String,
        required: true,
        
    }


});
Scope3energy.plugin(timestamps);


// createing model
const scope3db = new mongoose.model("Scope3energys", Scope3energy);

module.exports = scope3db;