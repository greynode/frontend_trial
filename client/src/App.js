
import Box from '@mui/material/Box';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./components/ContextProvider/Context";



import Header from "./components/Header";

import Dashboard from "./components/Clientcontrol/Dashboard";
import Error from "./components/Clientcontrol/Error";
import PasswordReset from "./components/Clientcontrol/PasswordReset";
import ForgotPassword from "./components/Clientcontrol/ForgotPassword";
import CircularProgress from '@mui/material/CircularProgress';

import Question from "./components/Clientpages/Question"
import Service from "./components/Services"
import Subuserhome from "./components/Subuserhome";



import Scope2energy from "./components/Scope2energy";
import Scope1dash from"./components/Scope2energydash"
import Mc1 from "./components/Mc1";

import Scope3 from "./components/Scope3";
import Scope3dash from "./components/Scope3dash";
import Scope3goods from "./components/Scope3goods";
import Scope3goodsdash from "./components/scope3goodsdash";
import Downstream from "./components/Clientpages/Downstream";


import Report from "./components/Report";
import Fugitive2 from "./components/Clientpages/Fugitivegas";

import Superregister from "./components/Superadmincontrol/Register";
import Superreset from "./components/Superadmincontrol/PasswordReset";
import Superlogin from "./components/Superadmincontrol/Login";
import Superforgotpass from "./components/Superadmincontrol/ForgotPassword";




import Subuserforgotpass from "./components/Subusercontrol/ForgotPassword";
import Subuserreset from "./components/Subusercontrol/PasswordReset";

import Clientusradd from "./components/Clientusradd";






import AssetDeclaration from "./components/Clientpages/AssetDeclaration";
import CompanyDetails from "./components/Clientpages/CompanyDetails";
import Mobile from "./components/Clientpages/Mobilecombustion";
import Home1View from "./components/Clientpages/Mobilecombustiondash";
import Process from "./components/Clientpages/Processemission";
import Processdash from "./components/Clientpages/processemissiondash";
import Fugi from "./components/Clientpages/Fugitiveemmision";
import Fugidash from "./components/Clientpages/Fugitiveemissiondash";
import Scombustion from "./components/Clientpages/Scombution";
import Scombustionhome from "./components/Clientpages/Scombustiondash";
import Subuseradd from "./components/Clientpages/Subuseradd";

import Profile2 from "./components/Clientpages/profile";

import Scope2 from "./components/Clientpages/Scope2";
import Scope2dash from "./components/Clientpages/Scope2dash";
//auth
import Subuserregister from "./components/Subusercontrol/Register";
import Subuserlogin from "./components/Subusercontrol/Login";
import Logins from "./components/Clientcontrol/Login";
import Registers from "./components/Clientcontrol/Register";
import Client from "./components/Superadmincontrol/Client";

import Superdash from "./components/Superadmincontrol/Dashboard";

import Subdash from "./components/Subusercontrol/Dashboard";
import Upstream from "./components/Clientpages/Upstream";
import Capitalgoods from "./components/Clientpages/Capitalgoods";
import Franchise from "./components/Clientpages/Franchisescope3";
import Goodsscope3 from "./components/Clientpages/Goodsscope3";

function App() {

  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);


  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");
    let stoken = localStorage.getItem("susersdatatoken");
    let atoken = localStorage.getItem("ausersdatatoken");

//client
    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });
      const data = await res.json();
  //subuser

  const sres = await fetch("/subuservaliduser", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": stoken
    }
  });
    const sdata = await sres.json();
    //superadmin
    const ares = await fetch("/supervaliduser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": atoken
      }
    });
      const adata = await ares.json();

    if (data.status == 201 ) {
      console.log("user verify");
    setLoginData(data)
      history("/dash");
   
      
    }else if(sdata.status == 201){
      console.log("user verify");
       setLoginData(sdata)
      history("/subdash");
      console.log("sub user");
    }else if(adata.status == 201){
      console.log("user verify");
      setLoginData(adata)
      history("/superdash");
      console.log("super user");
    }  else {
      console.log("user not valid ohh");
    }
  }

  useEffect(() => {
    setTimeout(()=>{
      DashboardValid();
      setData(true)
    },2000)

  }, [])

  return (
    <>
      {
        data ? (
          <>
     

            <Routes>
     
              <Route path="/" element={<Logins />} />
              <Route path="/register" element={<Registers />} />
              <Route path="/subuserregister" element={<Subuserregister/>}/>
              <Route path="/sublogin" element={<Subuserlogin/>}/>
              <Route path="/subdash" element={<Subdash/>}/>
              <Route path="/superdash" element={<Superdash/>}/>
            
              <Route path="/dash" element={<Dashboard />} />
              <Route path="/password-reset" element={<PasswordReset />} />
              <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
              <Route path="*" element={<Error />} />
      
          
              
              
              <Route path="/question" element={<Question/>}/>
              <Route path="/service" element={<Service/>}/>
              <Route path="/subhome" element={<Subuserhome/>}/>
    
            
      
              <Route path="/mc" element={<Mc1/>}/>
          
     
       
              <Route path="/downstream" element={<Downstream/>}/>
              <Route path="/upstream" element={<Upstream/>}/>
              <Route path="/capital" element={<Capitalgoods/>}/>
              <Route path="/report" element={<Report/>}/>
              <Route path="/fugitivetwo" element={<Fugitive2/>}/>
           
              <Route path="/Superregister" element={<Superregister/>}/>
              <Route path="/Superreset" element={<Superreset/>}/>
              <Route path="/Superlogin" element={<Superlogin/>}/>
              <Route path="/superforgotpassword/:id/:token" element={<Superforgotpass/>}/>
      
          
              <Route path="/subuserreset" element={<Subuserreset/>}/>
              <Route path="/subuserforgotpassword/:id/:token" element={<Subuserforgotpass/>}/>
            
              <Route path="/clientadd" element={<Clientusradd/>}/>
           
   
   
    <Route path="/companyadd2" element={<AssetDeclaration/>}/>
    <Route path="/companyadd" element={<CompanyDetails/>}/>
  <Route path="/home" element={<Scombustion/>}/>
    <Route path="/homeview" element={<Scombustionhome/>}/>
    <Route path="/mobilecombustion" element={<Mobile/>}/>
    <Route path="/mobiledash" element={<Home1View/>}/>
    <Route path="/processemission" element={<Process/>}/>
    <Route path="/processdash" element={<Processdash/>}/>
    <Route path="/fug" element={<Fugi/>}/>
    <Route path="/fugdash" element={<Fugidash/>}/>
    <Route path="/Subuseradd" element={<Subuseradd/>}/>
    <Route path="/profile" element={<Profile2/>}/>
    <Route path="/sco" element={<Scope2/>}/>
    <Route path="/scodash" element={<Scope2dash/>}/>

    <Route path="/client" element={<Client/>}/>
    <Route path="/franchise" element={<Franchise/>}/>
    <Route path="/scope3good" element={<Goodsscope3/>}/>


 

                       

              





            

            </Routes>
            
          </>

        ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      }


    </>
  );
}

export default App;

