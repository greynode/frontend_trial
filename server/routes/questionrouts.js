const express = require("express");
const qrouter = new express.Router();
const questiondb = require("../models/questionmodel");


qrouter.post("/question", async (req, res) => {

    const { email,scope, yesno1, yesno2, yesno3, yesno4, yesno5, yesno6, yesno7, yesno8, 
        yesno9, yesno10, yesno11, yesno12, yesno13, yesno14, yesno15, standard, yesno16, yesno17, yesno18, yesno19} = req.body;

   
    try {

        const question = await questiondb.findOne({ email: email });
       
        if (!email) {
             res.status(422).json({ error: "fill all the details" })
         }
        else if(question){
            
   

    try {
        
       

        if(1===1){
            
        
            // const upp = await questiondb.findOne({ email: email });
            
            const setnewcompanydetail = await questiondb.updateMany({email:email},{
                   // name,user,currency, country, pointofcontact,productservices,id,employee,website,activity,address
                   scope:scope,
                    yesno1:yesno1, yesno2:yesno2,yesno3:yesno3, yesno4:yesno4,yesno5:yesno5,yesno6:yesno6,yesno7:yesno7, yesno8:yesno8, 
                   yesno9:yesno9, yesno10:yesno10, yesno11:yesno11, yesno12:yesno12, yesno13:yesno13, yesno14:yesno14
                   , yesno15:yesno15, standard:standard, yesno16:yesno16, yesno17:yesno17, yesno18:yesno18, yesno19:yesno19
                
            
            
                
            
            });

          await  setnewcompanydetail.save();
            res.status(201).json({status:201,setnewcompanydetail})
           

        }
    } catch (error) {
        res.status(201).json({status:201,message:"updated!!!"})
    }

          }
      
         else {

            const questiondetail = new questiondb({
                   // name,user,currency, country, pointofcontact,productservices,id,employee,website,activity,address

                   email,scope, yesno1, yesno2, yesno3, yesno4, yesno5, yesno6, yesno7, yesno8, 
                   yesno9, yesno10, yesno11, yesno12, yesno13, yesno14, yesno15, standard, yesno16, yesno17, yesno18, yesno19
            });

            

            const Data = await questiondetail.save();

        
            res.status(201).json({ status: 201, Data })
        }

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});
module.exports = qrouter;