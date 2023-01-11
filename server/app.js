require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/clientrouter");
const cors = require("cors");
const cookiParser = require("cookie-parser")
const port = 8010;
const routers = require("./routes/companyroutes")
const routeruser = require("./routes/subuser")

const routerstation=require("./routes/emmisionroute");
const superouter = require("./routes/superadmin");



// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);
app.use(routers);
app.use(routeruser);
app.use(superouter)
app.use(routerstation);







app.listen(port,()=>{
    
})