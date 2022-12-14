
import "./CompanyForm.scss";
import Card from "./card/Card";
import React, { Component ,useState} from 'react';
import axios from 'axios';
import { NavLink,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Scomp = () =>{
  const getInitialState = () => {
    const type = "Boilers";
    return type;
  };
  const getInitialStates = () => {
    const type = "kg";
    return type;
  };

  const [type, setType] = useState(getInitialState);
  const [weight, setWeight] = useState(getInitialStates);
 
  console.log(type);
  console.log(weight);
  
const [inpval, setInpval] = useState({
     
      code:"",
      facility:"",
      quantity:"",
      type:type,
      weight:weight
     
  });
  const setVals = (e) => {
    setWeight(e.target.value)}

  const setVal = (e) => {
    setType(e.target.value);
    
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

      const { code,facility,quantity } = inpval;

         
         if (code === "") {
          toast.warning("email is required!", {
              position: "top-center"
          });}
          else if (facility === "") {
            toast.warning("password is required!", {
                position: "top-center"
            });
            }else if (quantity === "") {
              toast.warning("password is required!", {
                  position: "top-center"
              });}else{

        

          const data = await fetch("/scomp", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                code,facility,quantity,type,weight
              })
          });

          const res = await data.json();
          console.log(res)
          console.log(weight)
          


          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                
                code:"",
                facility:"",
              quantity:"",
                type:"",
                weight:""
                
             });}else {
              toast.error("Fail!", {
                position: "top-center"
            });
              }

          
  }}


    return(
        <>
        
        <div className="add-company-name">
        <form>
         <Card cardClass={"card"}>
          
          <h3 align="center">Stationary combution</h3>
          
          <label>code:</label>
            <input
              type="text"
              placeholder="Facility code"
              name="code"
              onChange={setVal}
              value={inpval.code}
              id="code"
            />
             <label>facility:</label>
            <input
              type="text"
              placeholder="facility"
              name="facility"
              onChange={setVal}
              value={inpval.facility}
              id="pass"
            />
           
            <label>quantity:</label>
            <input
              type="text"
              placeholder="quantity"
              name="quantity"
              onChange={setVal}
              value={inpval.quantity}
              id="quantity"
            />
            <label>kg/tone:</label>
             <div>
      <select value={weight} onChange={setVals}>
        <option value="kg">kg</option>
        <option value="tone">tone</option>
        </select>
      {/* <p>{`You selected ${type}`}</p> */}
    </div>
          
            <label>select type of equipment:</label>
             <div>
      <select value={type} onChange={setVal}>
        <option value="Boilers">Boilers</option>
        <option value="Furnace">Furnace</option>
        <option value="Heaters">Heaters</option>
        <option value="Kilns">Kilns</option>
        <option value="OvensFlares">OvensFlares</option>
        <option value="Thermaloxiders">Thermaloxiders</option>
         <option value="Dryers">Dryers</option>
        <option value="otherequipment">OtherEquipment</option>
       
      </select>
      {/* <p>{`You selected ${type}`}</p> */}
    </div>
          
             
            
  
            <div className="--my" align="center" >
            <button className='--btn-primary' onClick={addCompanydata}>Submit</button>
            {/* <p>next page<NavLink to="/dash">Go</NavLink></p> */}
            </div>
            <ToastContainer />
        </Card>  </form>
      </div></>
  
    )}

export default Scomp;