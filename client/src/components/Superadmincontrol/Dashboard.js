import React, { useContext, useEffect ,useState} from 'react'
import { Routes,Route, useNavigate,Link } from 'react-router-dom';
import { LoginContext } from '../ContextProvider/Context';
import Header from '../Header';

import "./dash.css"
import Clientusradd from '../Clientusradd';

    

const Dashboard = () => {
 

    const { logindata, setLoginData } = useContext(LoginContext);
    console.log(logindata);

    const [data, setData] = useState(false);

    //window.alert(data)
      const history = useNavigate();

    const DashboardValid = async () => {
        let token = localStorage.getItem("usersdatatoken");
        let stoken = localStorage.getItem("susersdatatoken");
        let atoken = localStorage.getItem("ausersdatatoken");

        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();
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
              history("/dash");
            }else if(adata.status == 201){
              console.log("user verify");
              setLoginData(adata)
              history("/superdash");
            }  else {
             
              //  history("/")
            }
    }


    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true)
        })//, 2000

    }, [])

    return (
        <>  <Routes> 
          <Route path="/demo" element={<Clientusradd/>} />
        </Routes>
       <Header/>
        <div id ="hello" width="50%" margin="auto" padding="10px">
     
        <Link to="/Subuseradd">
          <button id="bu">Subusr add</button>
        </Link>
        <Link to="/client">
          <button id="bu">client add</button>
        </Link>
       
        <Link to="/demo">
          <button id="bu">demo</button>
        </Link>
       
      
      
    
        
       </div>
       {/* <h1>user home page</h1>
       <Service/> */}
    </>
    )
}

export default Dashboard;