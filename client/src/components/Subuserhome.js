import React, { useContext, useEffect ,useState} from 'react'
import { Routes,Route, useNavigate,Link } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'

// import "./dash.css"

    

const Subuserhome = () => {

    // const { logindata, setLoginData } = useContext(LoginContext);
    // console.log(logindata);

    // const [data, setData] = useState(false);


    // const history = useNavigate();

    // const DashboardValid = async () => {
    //     let token = localStorage.getItem("usersdatatoken");

    //     const res = await fetch("/validuser", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": token
    //         }
    //     });

    //     const data = await res.json();

    //     if (data.status == 401 || !data) {
    //       //  history("*");
    //     } else {
    //         console.log("user verify");
    //         setLoginData(data)
            
    //         //window.alert(JSON.stringify(data))
    //        // history("/dash");
    //     }
    // }


    // useEffect(() => {
    //     setTimeout(() => {
    //         DashboardValid();
    //         setData(true)
    //     }, 2000)

    // }, [])

    return (
        <><div id ="hello" width="50%" margin="auto" padding="10px">
       <Link to="/userhome" >
          <button id="bu">service 1</button>
        </Link>
        <Link to="/userhome" >
          <button id="bu">service 2</button>
        </Link>
        <Link to="/userhome" >
          <button id="bu">service 3</button>
        </Link>
        <Link to="/comp" >
          <button id="bu">company homepage</button>
        </Link>
        {/* <Link to="/addusr">
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
        </Link> */}
      
       <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowFullScreen></iframe>
</div>

       </div>
    </>
    )
}

export default Subuserhome;