import React, { useContext, useEffect ,useState} from 'react'
import { Routes,Route, useNavigate,Link } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Companydetails from './Companydetails';
import "./dash.css"

    

const Dashboard = () => {

    const { logindata, setLoginData } = useContext(LoginContext);

    const [data, setData] = useState(false);


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

        if (data.status == 401 || !data) {
           history("*");
        } else {
            console.log("user verify");
            setLoginData(data)
            
            //window.alert(JSON.stringify(data))
           // history("/dash");
        }
    }


    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true)
        }, 2000)

    }, [])

    return (
        <><div id ="hello" width="50%" margin="auto" padding="10px">
       <Link to="/addd" >
          <button id="bu">Add company details</button>
        </Link>
        <Link to="/addusr">
          <button id="bu">Add user</button>
        </Link>
        <Link to="/remusr">
          <button id="bu">Remove user</button>
        </Link>
        
        <Link to="/sublogin">
          <button id="bu">Subuser login</button>
        </Link>
       </div>
    </>
    )
}

export default Dashboard;