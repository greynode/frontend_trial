import React, { useContext, useEffect ,useState} from 'react'
import { Routes,Route, useNavigate,Link } from 'react-router-dom';
import { LoginContext } from '../ContextProvider/Context';

import Box from '@mui/material/Box';
import "./dash.css"
import Fugi from "../Subuserpages/Fugitiveemmision";
import Scope3goodsdash from "../Subuserpages/Scope3goodsdash";
import Downstream from "../Subuserpages/Downstream";
import Question from "../Subuserpages/Question"
import Fugitive2 from "../Subuserpages/Fugitivegas";
import AssetDeclaration from "../Subuserpages/AssetDeclaration";
import CompanyDetails from "../Subuserpages/CompanyDetails";
import Mobile from "../Subuserpages/Mobilecombustion";
import Home1View from "../Subuserpages/Mobilecombustiondash";
import Process from "../Subuserpages/Processemission";
import Processdash from "../Subuserpages/processemissiondash";
import Fugidash from "../Subuserpages/Fugitiveemissiondash";
import Scombustion from "../Subuserpages/Scombution";
import Scombustionhome from "../Subuserpages/Scombustiondash";
import Subuseradd from "../Subuserpages/Subuseradd";
import Upstream from "../Subuserpages/Upstream";
import Capitalgoods from "../Subuserpages/Capitalgoods";
import Franchise from "../Subuserpages/Franchisescope3";
import Goodsscope3 from "../Subuserpages/Goodsscope3";

import Franchisedash from '../Subuserpages/Franchisedash';
import Fugitivegasdash from '../Subuserpages/Fugitive2dash';
import Downdash from '../Subuserpages/Downstreamdash';
import Upstreamdashb from '../Subuserpages/Upstreamdash';
import Capdash from '../Subuserpages/Capitalgoodsdash';
import Recommendation from '../Subuserpages/Recommendation';
import Profile2 from "../Subuserpages/Subpro";
import Scope2 from "../Subuserpages/Scope2";
import Scope2dash from "../Subuserpages/Scope2dash";
import CircularProgress from '@mui/material/CircularProgress';
import Mainpage from "../Clientpages/Maindash";
    

const Dashboard = () => {
 

    const { logindata, setLoginData } = useContext(LoginContext);
    

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
              history("/subdash");
            }else if(adata.status == 201){
              console.log("user verify");
              setLoginData(adata)
              history("/superdash");
            }  else {
             
                history("/")
            }
    }


    useEffect(() => {
        setTimeout(() => {
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
      <Route path="/" element={<Scombustion/>}/>
      <Route path="/homeview" element={<Scombustionhome/>}/>
      <Route path="/question" element={<Question/>}/>
      <Route path="/downstream" element={<Downstream/>}/>
      <Route path="/upstream" element={<Upstream/>}/>
      <Route path="/capital" element={<Capitalgoods/>}/>
      <Route path="/fugitivetwo" element={<Fugitive2/>}/>
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
      <Route path="/franchise" element={<Franchise/>}/>
      <Route path="/scope3good" element={<Goodsscope3/>}/>
      <Route path="/rec" element={<Recommendation/>}/>
      <Route path="/franchdash" element={<Franchisedash/>}/>
      <Route path="/sc3godash" element={<Scope3goodsdash/>}/>
      <Route path="/fugigasdash" element={<Fugitivegasdash/>}/>
      <Route path="/downdash" element={<Downdash/>}/>
      <Route path="/updash" element={<Upstreamdashb/>}/>
      <Route path="/capdash" element={<Capdash/>}/>
      <Route path="/Main" element={<Mainpage/>}/>
        </Routes>

  
       {/* <h1>user home page</h1>
       <Service/> */}
    </>) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      }</>
    )
}

export default Dashboard;