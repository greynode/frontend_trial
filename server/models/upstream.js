const mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');




var upstream = new mongoose.Schema({
   

    distance: {
        type: String,
        required: true,
       
    },
    material: {
        type: String,
        required: true,
        
    }
    ,
   
    quantity: {
        type: String,
        required: true,
        
    }
    ,code: {
        type: String,
        required: true,
        
    },byername: {
        type: String,
        required: true,
        
    },
    byerlocation: {
        type: String,
        required: true,
        
    },facility: {
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
   
    waste: {
        type: String,
        required: true,
        
    }
    ,dispose: {
        type: String,
        required: true,
        
    },quantity2: {
        type: String,
        required: true,
        
    },
    facility3: {
        type: String,
        required: true,
        
    },code3: {
        type: String,
        required: true,
        
    },employeecode: {
        type: String,
        required: true,
        
    },employeename: {
        type: String,
        required: true,
        
    },from: {
        type: String,
        required: true,
        
    },to: {
        type: String,
        required: true,
        
    },employeecode2: {
        type: String,
        required: true,
        
    },distance2: {
        type: String,
        required: true,
        
    },transport2: {
        type: String,
        required: true,
        
    },vehicle2: {
        type: String,
        required: true,
        
    },facility4: {
        type: String,
        required: true,
        
    },code4: {
        type: String,
        required: true,
        
    },from2: {
        type: String,
        required: true,
        
    },to2: {
        type: String,
        required: true,
        
    },distance3: {
        type: String,
        required: true,
        
    },transport3: {
        type: String,
        required: true,
        
    },asset: {
        type: String,
        required: true,
        
    },period: {
        type: String,
        required: true,
        
    },vehicle3: {
        type: String,
        required: true,
        
    }
});
upstream.plugin(timestamps);


// createing model
const upstreamdb = new mongoose.model("upstreams", upstream);

module.exports = upstreamdb;