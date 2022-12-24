
import "./CompanyForm.scss";
import Card from "./card/Card";
import React, { Component ,useState, useContext} from 'react';
import { LoginContext } from './Clientcontrol/ContextProvider/Context';

import axios from 'axios';
import { NavLink,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Clientusradd = () =>{
  
  const { logindata, setLoginData } = useContext(LoginContext); 
  console.log(logindata);
  const [inpval, setInpval] = useState({
     
      email:"",
      pass:"",
      active:""
     
  });


  const setVal = (e) => {
      
      const {name, value} = e.target;

      setInpval(() => {
          return {
              ...inpval,
              [name]: value,
            
          }
      })
  };

  const addCompanydata = async (e) => {
      e.preventDefault();

      const { email,pass,active} = inpval;

         // name,user,currency, country, pointofcontact,productservices,id,employee,website,activity,address
         if (email === "") {
          toast.warning("email is required!", {
              position: "top-center"
          });}
          else if (pass === "") {
            toast.warning("password is required!", {
                position: "top-center"
            });}else if (active === "") {
              toast.warning("password is required!", {
                  position: "top-center"
              });
            }else{

        

          const data = await fetch("/adminaddusr", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                  email,pass,active
              })
          });

          const res = await data.json();
          console.log(res)


          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                
              email:"",
              pass:"",
              active:""
             });}else {
              toast.error(" email already there!", {
                position: "top-center"
            });
              }

          
  }}


    return(
        <>
        
        <div className="add-company-name">
        <form>
         <Card cardClass={"card"}>
          
          <h3 align="center">Add subuser</h3>
          
          <label>User  Email:</label>
            <input
              type="text"
              placeholder="enter the user email"
              name="email"
              onChange={setVal}
              value={inpval.email}
              id="email"
            />
             <label>set the password:</label>
            <input
              type="text"
              placeholder="set the password"
              name="pass"
              onChange={setVal}
              value={inpval.pass}
              id="pass"
            />
            <label>active status:</label>
            <input
              type="text"
              placeholder="yes/no"
              name="active"
              onChange={setVal}
              value={inpval.active}
              id="active"
            />
          
             
            
  
            <div className="--my" align="center" >
            <button className='--btn-primary' onClick={addCompanydata}>Submit</button>
            {/* <p>next page<NavLink to="/dash">Go</NavLink></p> */}
            </div>
            <ToastContainer />
        </Card>  </form>
      </div></>
  
    )}

export default Clientusradd;