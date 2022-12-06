
const express = require("express");
const routeruser = new express.Router();
const subuserdb = require("../models/subuser");


routeruser.post("/addusr", async (req, res) => {

    const { email ,pass,active} = req.body;

    if ( !email || !pass|| !active) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {

        const preuser = await subuserdb.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This Email is Already Exist" })
        }
         else {
            const finalUser = new subuserdb({
                 email,pass,active
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


// routeruser.delete("/remusr", async (req, res) => {
//     const { email } = req.body;
//     if ( !email) {
//       //  res.status(422).json({ error: "fill all the details" })
//     }else{

//     try {
        
//         const usrr = await subuserdb.findOne({ email: email });
//         if(usrr){
//         const usr = await subuserdb.findOneAndDelete({email:email});
//         res.status(201).json({ status: 201, usr})
     
//      console.log(usr);}
//      else{
//         res.status(422).json(error);
//      }
   
//     } catch (error) {
//         res.send(error);
       
//     }}
// });
routeruser.post("/remusr", async (req, res) => {

    const { email ,pass,active } = req.body;

    if ( !email || !pass|| !active ) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {

        const preuser = await subuserdb.findOne({ email: email });

        if (preuser) {
            const users = await subuserdb.updateMany({email:email},{
                pass:pass,active:active});
        

            

            const storeData = await users.save();

        
            res.status(201).json({status:201,storeData})

        }
        else{
            res.status(401).json({status:401,message:"user not exist"})
        }

    } catch (error) {
        res.status(201).json({status:201})
        console.log("success");
    }

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
            if(pass===userValid.pass && userValid.active===true){
                res.status(201).json({status:201,userValid})
            }
            else{
                res.status(401).json({status:401,message:"invalid details"});
            }
        }
        else{
            res.status(401).json({status:401,message:"invalid details"});
        }

    } catch (error) {
        res.status(401).json({status:401,error});
        console.log("catch block");
    }
});

routeruser.get('/sublist', async (req, res) => {
	const usr = await subuserdb.find();

	res.json(usr);
});

module.exports = routeruser;