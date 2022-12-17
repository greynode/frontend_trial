const express = require("express");
const routerstation = new express.Router();
const stationdb = require("../models/stationary");
const mobiledb=require("../models/mobile")
const mobiledistancedb=require("../models/mobiledistance")
const freightdb=require("../models/freight")
	//mobile station


routerstation.post("/scomp", async (req, res) => {

    const { code,facility,quantity,type,weight,fuel,co2,ch4,no2} = req.body;

   

    try {

    
    
            const finalUser = new stationdb({
                code,facility,quantity,type,weight,fuel,co2,ch4,no2
            });

            

            const storeData = await finalUser.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeData })
        

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});

routerstation.get('/scompp', async (req, res) => {
	const usr = await stationdb.find();
    // console.log(usr[0].quantity);
    // for(i=0;usr.length>i;i++){
    //     console.log("hello");
     
    
    // if(usr[i].quantity<10000){
    //     console.log("yes");
    // }}

	res.json(usr);
});
//mobile distance
routerstation.post("/mcomp", async (req, res) => {

    const { code,facility,quantity,literdistance,fuel,co2,category,weight} = req.body;

   

    try {

    
    
            const saves = new mobiledb({
                code,facility,quantity,literdistance,fuel,co2,category,weight
            });

            

            const storeData = await saves.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeData })
        

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});

routerstation.get('/mcompp', async (req, res) => {
	const usr = await mobiledb.find();


	res.json(usr);
});


//mobile distance

routerstation.post("/mcompdist", async (req, res) => {

    const { code,facility,distance,fuel,co2,category,subcat} = req.body;

   

    try {

    
    
            const saves = new mobiledistancedb({
                code,facility,distance,fuel,co2,category,subcat
            });

            

            const storeDatadist = await saves.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeDatadist })
        

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});
routerstation.get('/mcomppdistdash', async (req, res) => {
	const usr = await mobiledistancedb.find();


	res.json(usr);
});

//freight
routerstation.post("/mcompfreight", async (req, res) => {

    const { code,facility,distance,fuel,co2,category,weight} = req.body;

   

    try {

    
    
            const saves = new freightdb({
                code,facility,distance,fuel,co2,category,weight
            });

            

            const storeDatadist = await saves.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeDatadist })
        

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});
routerstation.get('/mcomppfreight', async (req, res) => {
	const usr = await freightdb.find();


	res.json(usr);
});




module.exports =routerstation;  