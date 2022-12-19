const mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');




var downstream = new mongoose.Schema({
   

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
    ,material: {
        type: String,
        required: true,
        
    },quantity: {
        type: String,
        required: true,
        
    },
    byername: {
        type: String,
        required: true,
        
    },byerlocation: {
        type: String,
        required: true,
        
    },transport: {
        type: String,
        required: true,
        
    },vehicle: {
        type: String,
        required: true,
        
    },
    code2: {
        type: String,
        required: true,
       
    },
    facility2: {
        type: String,
        required: true,
        
    }
    ,
   
    process: {
        type: String,
        required: true,
        
    }
    ,material2: {
        type: String,
        required: true,
        
    },quantity2: {
        type: String,
        required: true,
        
    },
    byername2: {
        type: String,
        required: true,
        
    },byerlocation2: {
        type: String,
        required: true,
        
    },productname: {
        type: String,
        required: true,
        
    },finalproduct: {
        type: String,
        required: true,
        
    },location2: {
        type: String,
        required: true,
        
    },franchiseperiod: {
        type: String,
        required: true,
        
    },location: {
        type: String,
        required: true,
        
    },namefranchise: {
        type: String,
        required: true,
        
    },lease: {
        type: String,
        required: true,
        
    },disposal: {
        type: String,
        required: true,
        
    },productname2: {
        type: String,
        required: true,
        
    },usagetime: {
        type: String,
        required: true,
        
    }
});
downstream.plugin(timestamps);


// createing model
const downstreamdb = new mongoose.model("downstreams", downstream);

module.exports = downstreamdb;