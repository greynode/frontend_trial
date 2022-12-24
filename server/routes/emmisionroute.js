const express = require("express");
const routerstation = new express.Router();
const stationdb = require("../models/stationary");
const mobiledb=require("../models/mobile")
const mobiledistancedb=require("../models/mobiledistance")
const freightdb=require("../models/freight")
const energydb=require("../models/scope2energy")
const Mcdb=require("../models/mc1")
const fugitiveDB= require("../models/fugitive")
const scope3db=require("../models/scope3")
const scope3goodsdb=require("../models/scope3goods")
const downstreamdb=require("../models/downstream")
const upstreamdb=require("../models/upstream");
const capitaldb = require("../models/capitalgoods");
const fugitivedb= require("../models/fugitive2")
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

    const { code,facility,quantity,literdistance,fuel,co2,category,subcat } = req.body;

   

    try {

    
    
            const saves = new mobiledb({
                code,facility,quantity,literdistance,fuel,co2,category,subcat
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
//scope2 energy

routerstation.post("/energy", async (req, res) => {

    const { code,facility,fuel,co2,quantity} = req.body;

   

    try {

    
    
            const saves = new energydb({
                code,facility,fuel,co2,quantity
            });

            

            const storeDatadist = await saves.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeDatadist })
        

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});
routerstation.get('/energydash', async (req, res) => {
	const usr = await energydb.find();


	res.json(usr);
});
//mc

routerstation.post("/mc1", async (req, res) => {

    const {    road,nonroad,rail,water,air} = req.body;

   

    try {

    
    
            const saves = new Mcdb({
                road,nonroad,rail,water,air
            });

            

            const storeDatadist = await saves.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeDatadist })
        

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});
routerstation.get('/mcdash', async (req, res) => {
	const usr = await Mcdb.find();


	res.json(usr);
});
//fugitive 

routerstation.post("/fug", async (req, res) => {

    const {      code,facility,i,f,g,h,j,refrigerant,refrigeration,co2} = req.body;

   

    try {

    
    
            const saves = new fugitiveDB({
                code,facility,i,f,g,h,j,refrigerant,refrigeration,co2
            });

            

            const storeDatadist = await saves.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeDatadist })
        

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});
routerstation.get('/fugdash', async (req, res) => {
	const usr = await fugitiveDB.find();


	res.json(usr);
});
//scope3
routerstation.post("/scope3", async (req, res) => {

    const {    name,product,time,disposal,asset,period,franchisename,franchiseperiod,investment,location  } = req.body;

   

    try {

    
    
            const saves = new scope3db({
                name,product,time,disposal,asset,period,franchisename,franchiseperiod,investment,location
            });

            

            const storeDatadist = await saves.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeDatadist })
        

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});
routerstation.get('/scope3dash', async (req, res) => {
	const usr = await scope3db.find();


	res.json(usr);
});
//scope3goods
routerstation.post("/scope3goods", async (req, res) => {

    const { period2,vendorlocation2,vendorname2,name2,code2,quantity,purchased,vendorlocation,vendorname,namegoods,codegoods,serviceavailed  } = req.body;

   

    try {

    
    
            const saves = new scope3goodsdb({
                period2,vendorlocation2,vendorname2,name2,code2,quantity,purchased,vendorlocation,vendorname,namegoods,codegoods,serviceavailed
            });

            

            const storeDatadist = await saves.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeDatadist })
        

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});
routerstation.get('/scope3goodsdash', async (req, res) => {
	const usr = await scope3goodsdb.find();


	res.json(usr);
});
//downstream
routerstation.post("/downstream", async (req, res) => {

    const { distance,material,quantity,code,byername,byerlocation,facility,transport,vehicle,code2,byername2,byerlocation2,facility2
        ,finalproduct,quantity2,process,material2,productname,usagetime,productname2,disposal,lease,namefranchise,location
        ,franchiseperiod,location2    } = req.body;

   

    try {

    
    
            const saves = new downstreamdb({
                distance,material,quantity,code,byername,byerlocation,facility,transport,vehicle,code2,byername2,byerlocation2,facility2
                ,finalproduct,quantity2,process,material2,productname,usagetime,productname2,disposal,lease,namefranchise,location
                ,franchiseperiod,location2          });

            

            const storeDatadist = await saves.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeDatadist })
        

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});
routerstation.get('/downstreamdash', async (req, res) => {
	const usr = await downstreamdb.find();


	res.json(usr);
});
//upstream
routerstation.post("/upstream", async (req, res) => {

    const {  distance,material,quantity,code,byername,byerlocation,facility,transport,vehicle,facility2,code2,waste,dispose,quantity2,facility3,
        code3,employeecode,employeename,from,to,employeecode2,employeename2,distance2,transport2,
        vehicle2,facility4,code4,from2,to2,distance3,transport3,period,asset,vehicle3   } = req.body;

   

    try {

    
    
            const saves = new upstreamdb({
                distance,material,quantity,code,byername,byerlocation,facility,transport,vehicle,facility2,code2,waste,dispose,quantity2,facility3,
                code3,employeecode,employeename,from,to,employeecode2,employeename2,distance2,transport2,
                vehicle2,facility4,code4,from2,to2,distance3,transport3,period,asset,vehicle3        });

            

            const storeDatadist = await saves.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeDatadist })
        

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});
routerstation.get('/upstreamdash', async (req, res) => {
	const usr = await upstreamdb.find();


	res.json(usr);
});
//capital goods
routerstation.post("/cap", async (req, res) => {

    const {  energy,employeename,employeecode,code3,facility3,vehicle2,transport2,quantity2,code2,facility2,
        quantity,material,distance,vehicle,transport,facility,byerlocation,byername,code  } = req.body;

   

    try {

    
    
            const saves = new capitaldb({
                energy,employeename,employeecode,code3,facility3,vehicle2,transport2,quantity2,code2,facility2,
                quantity,material,distance,vehicle,transport,facility,byerlocation,byername,code        });

            

            const storeDatadist = await saves.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeDatadist })
        

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});
routerstation.get('/capdash', async (req, res) => {
	const usr = await capitaldb.find();


	res.json(usr);
});
//fugitive 2

routerstation.post("/fugitive2",async(req,res) => {
    const { gases, code, facility, fuel, quantity, yesno, code2, 
            facility2, fire, typegas, capacity, co2, co3} = req.body


            const testdetail = new fugitivedb({
                gases, code, facility, fuel, quantity, yesno, code2, 
            facility2, fire, typegas, capacity, co2, co3 
            });

            const data= await testdetail.save();

            res.status(201).json({ status: 201, data})
        }
);

    



module.exports =routerstation;  