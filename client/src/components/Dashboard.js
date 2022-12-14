import React, { useContext, useEffect ,useState} from 'react'
import { Routes,Route, useNavigate,Link } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';
import Service from "./Services"
import "./dash.css"

    

const Dashboard = () => {

    const { logindata, setLoginData } = useContext(LoginContext);
    console.log(logindata);

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
          //  history("*");
        } else {
            console.log("user verify");
            setLoginData(data)
            
            //window.alert(JSON.stringify(data))
            //history("/dash");
        }
    }


    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true)
        }, 2000)

    }, [])

    return (
        <>
       
        <div id ="hello" width="50%" margin="auto" padding="10px">
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
        <Link to="/sublist">
          <button id="bu">userlist</button>
        </Link>
        <Link to="/question">
          <button id="bu">Measurement questions</button>
        </Link>
        <Link to="/subhome">
          <button id="bu">subuser home page</button>
        </Link>
        {/* <Link to="/example">
          <button id="bu">example</button>
        </Link> */}
        <Link to="/scomp">
          <button id="bu">stationay combution</button>
        </Link>
        <Link to="/test">
          <button id="bu">Test</button>
        </Link>
       </div>
       {/* <h1>user home page</h1>
       <Service/> */}
    </>
    )
}

export default Dashboard;