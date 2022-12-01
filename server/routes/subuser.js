
const express = require("express");
const routeruser = new express.Router();
const subuserdb = require("../models/subuser");


routeruser.post("/addusr", async (req, res) => {

    const { email ,pass} = req.body;

    if ( !email || !pass) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {

        const preuser = await subuserdb.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This Email is Already Exist" })
        }
         else {
            const finalUser = new subuserdb({
                 email,pass
            });

            

            const storeData = await finalUser.save();

            // console.log(storeData);
            res.status(201).json({ status: 201, storeData })
        }

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});


routeruser.delete("/remusr", async (req, res) => {
    const { email } = req.body;
    if ( !email) {
      //  res.status(422).json({ error: "fill all the details" })
    }else{

    try {
        
        const usrr = await subuserdb.findOne({ email: email });
        if(usrr){
        const usr = await subuserdb.findOneAndDelete({email:email});
        res.status(201).json({ status: 201, usr})
     
     console.log(usr);}
     else{
        res.status(422).json(error);
     }
   
    } catch (error) {
        res.send(error);
       
    }}
});
//login
routeruser.post("/sublogin", async (req, res) => {
    

    const { email, pass } = req.body;

    if (!email || !pass) {
        res.status(422).json({ error: "fill all the details" })
    }

     try {
       const userValid = await subuserdb.findOne({email:email});
    //    console.log(userValid);

        if(userValid){

            // const Validuser = await subuserdb.findOne({pass:pass});
            if(pass===userValid.pass){
                res.status(201).json({status:201,userValid})
            }else{
                res.status(401).json({status:401,message:"invalid details"});
            }
        }else{
            res.status(401).json({status:401,message:"invalid details"});
        }

    } catch (error) {
        res.status(401).json({status:401,error});
        console.log("catch block");
    }
});


module.exports = routeruser;