import Header from "../Clientcontrol/Header";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./ContextProvider/Context";

import Superregister from "./Register";
import Superreset from "./PasswordReset";
import Superlogin from "./Login";
import Superforgotpass from "./ForgotPassword";
import Superdash from "./Superdash";




function Superapp() {

  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);


  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("superusersdatatoken");

    const res = await fetch("/supervaliduser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });

    const data = await res.json();

    if (data.status == 401 || !data) {
      console.log("user not valid");
    } else {
      console.log("user verify");
      setLoginData(data)
      history("/superdash");
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
          {/* <Superregister/>
          <Superreset/>
          <Superlogin/> */}
           <Routes> 
          

              <Route path="/Superreset" element={<Superreset/>}/>
              <Route path="/app/Superlogin" element={<Superlogin/>}/>
              <Route path="/superforgotpassword/:id/:token" element={<Superforgotpass/>}/>
              <Route path="/superdash" element={<Superdash/>}/>
       

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

export default Superapp;

