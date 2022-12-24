import Header from "./components/Header";
import Login from "./components/Clientcontrol/Login";
import Register from "./components/Clientcontrol/Register";
import Dashboard from "./components/Clientcontrol/Dashboard";
import Error from "./components/Clientcontrol/Error";
import PasswordReset from "./components/Clientcontrol/PasswordReset";
import ForgotPassword from "./components/Clientcontrol/ForgotPassword";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./components/ContextProvider/Context";
import Companydetails from "./components/Companydetails"
import Subusradd from "./components/Subusradd";
import Subusrrem from "./components/Subusrrem";

import Profile from "./components/Profile"
import Subuserlist from "./components/Subuserlist"
import Question from "./components/Question"
import Service from "./components/Services"
import Subuserhome from "./components/Subuserhome";
import Scomp from "./components/Scombution";
import Test from "./components/Test";
import Scombustiondash from "./components/Scombustiondash";
import Mcomp from "./components/Mobilecombustion";
import Mobiledash from "./components/Mobilecombustiondash";
import Mcompdist from "./components/Mobilecombustiondistance";
import Mobiledistdash from "./components/Mobiledistdash";
import Mcompfreight from "./components/Mobilefreight";
import Mobilefreightdash from "./components/Mobilefreightdash";
import Scope2energy from "./components/Scope2energy";
import Scope1dash from"./components/Scope2energydash";
import Mc1 from "./components/Mc1";
import Fugitive from "./components/Fugitive";
import Fugitivedash from "./components/Fugitivedash";
import Scope3 from "./components/Scope3";
import Scope3dash from "./components/Scope3dash";
import Scope3goods from "./components/Scope3goods";
import Scope3goodsdash from "./components/scope3goodsdash";
import Downstream from "./components/Downstream";
import Upstream from "./components/Upstream";
import Capitalgoods from "./components/Capitalgoods";
import Report from "./components/Report";
import Fugitive2 from "./components/Fugitive2";
import Subfirst from "./components/Subusrfirstlog";
import Superregister from "./components/Superadmincontrol/Register";
import Superreset from "./components/Superadmincontrol/PasswordReset";
import Superlogin from "./components/Superadmincontrol/Login";
import Superforgotpass from "./components/Superadmincontrol/ForgotPassword";
import Superdash from "./components/Superadmincontrol/Superdash";

import Subuserregister from "./components/Subusercontrol/Register";
import Subuserdash from "./components/Subusercontrol/Superdash";
import Subuserforgotpass from "./components/Subusercontrol/ForgotPassword";
import Subuserreset from "./components/Subusercontrol/PasswordReset";
import Subuserlogin from "./components/Subusercontrol/Login";
import Clientusradd from "./components/Clientusradd";



function App() {

  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);


  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });

    const data = await res.json();

    // if (data.status == 401 || !data) {
    //   console.log("user not valid");
    // } else {
    //   console.log("user verify");
    //   setLoginData(data)
    //   history("/dash");
    // }
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
            <Header />

            <Routes>
              <Route path="/" element={<Login />} />
              {/* <Route path="/"element={<Dashboard/>}/> */}
              <Route path="/register" element={<Register />} />
              <Route path="/dash" element={<Dashboard />} />
              <Route path="/password-reset" element={<PasswordReset />} />
              <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
              <Route path="*" element={<Error />} />
              <Route path="/addd" element={<Companydetails/>}/> 
              <Route path="/addusr" element={<Subusradd/>}/>
              <Route path="/remusr" element={<Subusrrem/>}/>
              <Route path="/sublogin" element={<Subuserlogin/>}/>
              <Route path="/comp" element={<Profile/>}/>
              <Route path="/sublist" element={<Subuserlist/>}/>
              <Route path="/question" element={<Question/>}/>
              <Route path="/service" element={<Service/>}/>
              <Route path="/subhome" element={<Subuserhome/>}/>
              <Route path="/scomp" element={<Scomp/>}/>
              <Route path="/test" element={<Test/>}/>
              <Route path="/scompp" element={<Scombustiondash/>}/>
              <Route path="/mcomp" element={<Mcomp/>}/>
              <Route path="/mcompp" element={<Mobiledash/>}/>
              <Route path="/mcomppdist" element={<Mcompdist/>}/>
              <Route path="/mcomppdistdash" element={<Mobiledistdash/>}/>
              <Route path="/mcomppfreight" element={<Mcompfreight/>}/>
              <Route path="/mcomppfreightdash" element={<Mobilefreightdash/>}/>
              <Route path="/scope2" element={<Scope2energy/>}/>
              <Route path="/scope2dash" element={<Scope1dash/>}/>
              <Route path="/mc" element={<Mc1/>}/>
              <Route path="/fugitive" element={<Fugitive/>}/>
              <Route path="/fugitivedash" element={<Fugitivedash/>}/>
              <Route path="/scope3" element={<Scope3/>}/>
              <Route path="/scope3dash" element={<Scope3dash/>}/>
              <Route path="/scope3good" element={<Scope3goods/>}/>
              <Route path="/scope3gooddas" element={<Scope3goodsdash/>}/>
              <Route path="/downstream" element={<Downstream/>}/>
              <Route path="/upstream" element={<Upstream/>}/>
              <Route path="/capital" element={<Capitalgoods/>}/>
              <Route path="/report" element={<Report/>}/>
              <Route path="/fugitivetwo" element={<Fugitive2/>}/>
              <Route path="/subfirst" element={<Subfirst/>}/>
              <Route path="/Superregister" element={<Superregister/>}/>
              <Route path="/Superreset" element={<Superreset/>}/>
              <Route path="/Superlogin" element={<Superlogin/>}/>
              <Route path="/superforgotpassword/:id/:token" element={<Superforgotpass/>}/>
              <Route path="/superdash" element={<Superdash/>}/>
              <Route path="/subuserregister" element={<Subuserregister/>}/>
              <Route path="/subuserlogin" element={<Subuserlogin/>}/>
              <Route path="/subuserreset" element={<Subuserreset/>}/>
              <Route path="/subuserforgotpassword/:id/:token" element={<Subuserforgotpass/>}/>
              <Route path="/subuserdash" element={<Subuserdash/>}/>
              <Route path="/clientadd" element={<Clientusradd/>}/>

                       

              





            

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

