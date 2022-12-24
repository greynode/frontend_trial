import React, { useContext, useEffect ,useState} from 'react'
import { Routes,Route, useNavigate,Link } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';

import "./dash.css"

    

const Subuserdash = () => {
 

    const { logindata, setLoginData } = useContext(LoginContext);
    console.log(logindata);

    const [data, setData] = useState(false);

    //window.alert(data)
      const history = useNavigate();

    const SubuserdashValid = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("/subuservaliduser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();

        if (data.status == 401 || !data) {
            history("/");
        } else {
            console.log("user verify");
            setLoginData(data)
          let va =logindata
           // window.alert(va.ValidUserOne.email)
            history("/subuserdash");
        }
    }


    useEffect(() => {
        setTimeout(() => {
            SubuserdashValid();
            setData(true)
        })//, 2000

    }, [])

    return (
        <>
       
        <div id ="hello" width="50%" margin="auto" padding="10px">
      
        
        <Link to="/sublogin">
          <button id="bu">Subuser login</button>
        </Link>
       
       </div>
       {/* <h1>user home page</h1>
       <Service/> */}
    </>
    )
}

export default Subuserdash;