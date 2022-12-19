
import "./CompanyForm.scss";
import Card from "./card/Card";
import React, { Component ,useState} from 'react';

import axios from 'axios';
import { NavLink,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Scope3 = () =>{
  

  const [inpval, setInpval] = useState({
     
      name:"",
      time:"",
      franchiseperiod:"",product:"",disposal:"",asset:"",period:"",franchisename:"",investment:"",location:""
     
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

      const {name,product,time,disposal,asset,period,franchisename,franchiseperiod,investment,location} = inpval;

         // name,user,currency, country, pointofcontact,productservices,id,employee,website,activity,address
         if (name === "") {
          toast.warning("name is required!", {
              position: "top-center"
          });}
          else if (time === "") {
            toast.warning("password is required!", {
                position: "top-center"
            });}else if (product === "") {
              toast.warning("password is required!", {
                  position: "top-center"
              });
            }else if (asset === "") {
                toast.warning("password is required!", {
                    position: "top-center"
                });
              }else if (period === "") {
                toast.warning("password is required!", {
                    position: "top-center"
                });
              }else if (franchiseperiod === "") {
                toast.warning("password is required!", {
                    position: "top-center"
                });
              }else if (investment === "") {
                toast.warning("password is required!", {
                    position: "top-center"
                });
              }else if (location === "") {
                toast.warning("password is required!", {
                    position: "top-center"
                });
              }else{

        

          const data = await fetch("/scope3", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                name,product,time,disposal,asset,period,franchisename,franchiseperiod,investment,location
              })
          });

          const res = await data.json();
          console.log(res)


          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                
                name:"",
                time:"",
                franchiseperiod:"",product:"",disposal:"",asset:"",period:"",franchisename:"",investment:"",location:""
             });}else {
              toast.error(" name already there!", {
                position: "top-center"
            });
              }

          
  }}
//name,product,time,disposal,asset,period,franchisename,franchiseperiod,investment,location

    return(
        <>
        
        <div className="add-company-name">
        <form>
         <Card cardClass={"card"}>
          
          <h3 align="center">Scope 3</h3>
          
          <label>Name of the product:</label>
            <input
              type="text"
              placeholder="enter the user name"
              name="name"
              onChange={setVal}
              value={inpval.name}
              id="name"
            />
             <label>times of usage:</label>
            <input
              type="text"
              placeholder="set the password"
              name="time"
              onChange={setVal}
              value={inpval.time}
              id="time"
            />
            <label>Name of the product:</label>
            <input
              type="text"
              placeholder="product"
              name="product"
              onChange={setVal}
              value={inpval.product}
              id="product"
            /><label>Method of disposal:</label>
            <input
              type="text"
              placeholder="disposal"
              name="disposal"
              onChange={setVal}
              value={inpval.disposal}
              id="disposal"
            /><label>Type of leased asset:</label>
            <input
              type="text"
              placeholder="asset"
              name="asset"
              onChange={setVal}
              value={inpval.asset}
              id="asset"
            /><label>Lease period:</label>
            <input
              type="text"
              placeholder="period"
              name="period"
              onChange={setVal}
              value={inpval.period}
              id="period"
            /><label>Name of the franchise:</label>
            <input
              type="text"
              placeholder="franchisename"
              name="franchisename"
              onChange={setVal}
              value={inpval.franchisename}
              id="franchisename"
            />
            <label>Location Period of franchise:</label>
            <input
              type="text"
              placeholder="franchiseperiod"
              name="franchiseperiod"
              onChange={setVal}
              value={inpval.franchiseperiod}
              id="franchiseperiod"
            />
             <label>Type of investment:</label>
            <input
              type="text"
              placeholder="investment"
              name="investment"
              onChange={setVal}
              value={inpval.investment}
              id="eperiod"
            />
            <label>Location:</label>
            <input
              type="text"
              placeholder="location/no"
              name="location"
              onChange={setVal}
              value={inpval.location}
              id="fra"
            />
          
             
            
  
            <div className="--my" align="center" >
            <button className='--btn-primary' onClick={addCompanydata}>Submit</button>
            {/* <p>next page<NavLink to="/dash">Go</NavLink></p> */}
            </div>
            <ToastContainer />
        </Card>  </form>
      </div></>
  
    )}

export default Scope3;