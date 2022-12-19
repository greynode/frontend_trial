
import "./CompanyForm.scss";
import Card from "./card/Card";
import React, { Component ,useState} from 'react';
import axios from 'axios';
import { NavLink,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Scope2energy = () =>{



  //const [type, setType] = useState(getInitialState);

  const [fuel, setFuel] = useState("solar");
 
  
  
const [inpval, setInpval] = useState({
     
      code:"",
      facility:"",
      quantity:""
      // type:type,
      // literdistance:literdistance,
      // fuel:fuel
     
  });

    const setValss = (e) => {
      setFuel(e.target.value)}
 

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

      const { code,facility,quantity } = inpval;

         
         if (code === "") {
          toast.warning("code is required!", {
              position: "top-center"
          });}
          else if (facility === "") {
            toast.warning("Facility is required!", {
                position: "top-center"
            });
            }else if (quantity === "") {
              toast.warning("quantity is required!", {
                  position: "top-center"
              });}else{
//calculation

const nuclear=0.027
const biogas=0.027
const solar=0.027
const igp=0.027
const wind=0.027
const naturalgas=0.027




function igps(calc){
    var result=(calc*(igp))
    return result
     
}
function naturalgass(calc){
    var result=(calc*(naturalgas))
    return result
     
}function solars(calc){
    var result=(calc*(solar))
    return result
     
}function winds(calc){
    var result=(calc*(wind))
    return result
     
}function biogass(calc){
    var result=(calc*(biogas))
    return result
     
}function nuclears(calc){
    var result=(calc*(nuclear))
    return result
     
}




      
                
let val="null"





  if(fuel==="igp"){
 val =igps(inpval.quantity)}
 else if(fuel==="wind"){
  val =winds(inpval.quantity)
}
else if(fuel==="solar"){
  val =solars(inpval.quantity)
}else if(fuel==="naturalgas"){
  val =naturalgass(inpval.quantity)
}else if(fuel==="nuclear"){
  val =nuclears(inpval.quantity)
}else if(fuel==="biogas"){
  val =biogass(inpval.quantity)
}else{
  console.log("errr");
}


            let co2=val
           
            







          const data = await fetch("/energy", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                code,facility,quantity,fuel,co2
              })
          });

          const res = await data.json();
          console.log(res)
          
          


          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                
                code:"",
                facility:"",
              quantity:""
              
               
                
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
          
          <h3 align="center">Scope2 energy</h3>
          
          <label>facality code:</label>
            <input
              type="text"
              placeholder="Facility code"
              name="code"
              onChange={setVal}
              value={inpval.code}
              id="code"
            />
               <label>facility name:</label>
            <input
              type="text"
              placeholder="facility"
              name="facility"
              onChange={setVal}
              value={inpval.facility}
              id="pass"
            />
            
          
            <label>select type of electricity:</label>
             <div>
      <select value={fuel} onChange={setValss}>
        <option value="igp">indian grid power</option>
        <option value="solar">Solar</option>
        <option value="wind">Wind</option>
        <option value="naturalgas">Natural gas</option>
        <option value="nuclear">Nuclear</option>
        <option value="biogas">Bio gas</option>
       

        
        
       
      </select>

    </div>
            <label>Amount of electricity:</label>
            <input
              type="number"
              placeholder="quantity"
              name="quantity"
              onChange={setVal}
              value={inpval.quantity}
              id="quantity"
            />
            
          
  
            <div className="--my" align="center" >
            <button className='--btn-primary' onClick={addCompanydata}>Submit</button>
       
            </div>
            <ToastContainer />
        </Card>  </form>
      </div></>
  
    )}

export default Scope2energy;