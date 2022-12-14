const mongoose = require("mongoose");




var stationarySchema = new mongoose.Schema({
   // name,user,currency, country, pointofcontact,productservices,id,employee,website,activity,address

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
    ,type: {
        type: String,
        required: true,
        
    },weight: {
        type: String,
        required: true,
        
    }
});








// createing model
const stationdb = new mongoose.model("stationaries", stationarySchema);

module.exports = stationdb;