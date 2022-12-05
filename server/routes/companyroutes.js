const express = require("express");
const routers = new express.Router();
const companydb = require("../models/companySchema");




// for user registration

routers.post("/addd", async (req, res) => {

    const { name,user,email,currency, country, pointofcontact,productservices,ids,employee,website,activity,address,description} = req.body;

   
    try {

        const comp = await companydb.findOne({ email: email });
       
        // if (!fname || !email || !password || !cpassword) {
        //     res.status(422).json({ error: "fill all the details" })
        // }
          if(comp){
            
    //const { name,user,email,currency, country, pointofcontact,productservices,ids,employee,website,activity,address,description} = req.body;

    try {
        // const ids = await companydb.findOne({_id:id});
       

        if(1===1){
            
        
           // const upp = await companydb.findOne({ email: email });
            
            const setnewcompanydetail = await companydb.updateMany({email:email},{
                   // name,user,currency, country, pointofcontact,productservices,id,employee,website,activity,address
                
                name:name,
                user:user,
             
                currency:currency,
                 country:country,
                  pointofcontact:pointofcontact,
                  productservices:productservices,
                  ids:ids,
                  employee:employee,
                  website:website,
                  activity:activity,
                  address:address,
                  description:description,
                 
                //   category:category
            
            
                
            
            });

          await  setnewcompanydetail.save();
            res.status(201).json({status:201,setnewcompanydetail})
           

        }else{
            res.status(401).json({status:401,message:"user not exist"})
        }
    } catch (error) {
        res.status(401).json({status:401,error})
    }

          }
      
         else {

            const companydetail = new companydb({
                   // name,user,currency, country, pointofcontact,productservices,id,employee,website,activity,address

                name,user,email,currency, country, pointofcontact,productservices,ids,employee,website,activity,address,description
            });

            

            const Data = await companydetail.save();

        
            res.status(201).json({ status: 201, Data })
        }

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});


routers.get('/comp', async (req, res) => {
	const compp = await companydb.find();

	res.json(compp);
});

    



















module.exports = routers;






