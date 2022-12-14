const express = require("express");
const routerstation = new express.Router();
const stationdb = require("../models/stationary");


routerstation.post("/scomp", async (req, res) => {

    const { code,facility,quantity,type,weight} = req.body;

   

    try {

    
    
            const finalUser = new stationdb({
                code,facility,quantity,type,weight
            });

            

            const storeData = await finalUser.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeData })
        

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});
module.exports =routerstation;  