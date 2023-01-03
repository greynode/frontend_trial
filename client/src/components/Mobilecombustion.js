
import "./CompanyForm.scss";
import Card from "./card/Card";
import React, { Component ,useState} from 'react';
import axios from 'axios';
import { NavLink,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Mcomp = () =>{
  const getInitialState = () => {
    const type = "Boilers";
    return type;
  };
  const getInitialStates = () => {
    const type = "liter";
    return type;
  };

  //const [type, setType] = useState(getInitialState);
  const [literdistance, setliterdistance] = useState(getInitialStates);
  const [fuel, setFuel] = useState("jetFuel");
 
  
  
const [inpval, setInpval] = useState({
     
      code:"",
      facility:"",
      quantity:"",
      subcat:"",
      category:""
      // type:type,
      // literdistance:literdistance,
      // fuel:fuel
     
  });
  const setVals = (e) => {
    setliterdistance(e.target.value)}
    const setValss = (e) => {
      setFuel(e.target.value)}
      // const setValsss = (e) => {
      //   setType(e.target.value);}

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

      const { code,facility,quantity ,category,subcat} = inpval;

         
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

const JetFuel	       =  2.49
const AviationGasoline=	2.2
const GasolinePetrol	=2.27
const OnRoadDieselFuel=	2.67
const ResidualFuelOil =	2.93
const LPG=	1.61
const CNG=	0.053
const LNG=	1.17
const Ethanol	=1.46
const Biodiesel	=2.49
const EthanolGasoline=	0.34
const BiodieselDiesel=	2.14




function jetFuels(calc){
    var result=(calc*(JetFuel))
    return result
     
}
function AviationGasolines(calc){
    var result=(calc*(AviationGasoline))
    return result
     
}function GasolinePetrols(calc){
    var result=(calc*(GasolinePetrol))
    return result
     
}function OnRoadDieselFuels(calc){
    var result=(calc*(OnRoadDieselFuel))
    return result
     
}function ResidualFuelOils(calc){
    var result=(calc*(ResidualFuelOil))
    return result
     
}function LPGs(calc){
    var result=(calc*(LPG))
    return result
     
}function CNGs(calc){
    var result=(calc*(CNG))
    return result
     
}function LNGs(calc){
    var result=(calc*(LNG))
    return result
     
}function Ethanols(calc){
    var result=(calc*(Ethanol))
    return result
     
}function Biodiesels(calc){
    var result=(calc*(Biodiesel))
    return result
     
}function EthanolGasolines(calc){
    var result=(calc*(EthanolGasoline))
    return result
     
}
function BiodieselDiesels(calc){
    var result=(calc*(BiodieselDiesel))
    return result
     
}


//in km




      
                
let val="null"





  if(fuel==="BiodieselDiesel"){
 val =BiodieselDiesels(inpval.quantity)}
 else if(fuel==="EthanolGasoline"){
  val =EthanolGasolines(inpval.quantity)
}
else if(fuel==="Biodiesel"){
  val =Biodiesels(inpval.quantity)
}else if(fuel==="Ethanol"){
  val =Ethanols(inpval.quantity)
}else if(fuel==="LNG"){
  val =LNGs(inpval.quantity)
}else if(fuel==="CNG"){
  val =CNGs(inpval.quantity)
}else if(fuel==="LPG"){
  val =LPGs(inpval.quantity)
}else if(fuel==="ResidualFuelOil"){
  val =ResidualFuelOils(inpval.quantity)
}else if(fuel==="OnRoadDieselFuel"){
  val =OnRoadDieselFuels(inpval.quantity)
}else if(fuel==="GasolinePetrol"){
  val =GasolinePetrols(inpval.quantity)
}else if(fuel==="AviationGasoline"){
  val =AviationGasolines(inpval.quantity)
}else if(fuel==="JetFuel"){
  val =jetFuels(inpval.quantity)
}else{
  console.log("errr");
}


            let co2=val
           
            







          const data = await fetch("/mcomp", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                code,facility,quantity,literdistance,fuel,co2,category,subcat
              })
          });

          const res = await data.json();
          console.log(res)
          console.log(literdistance)
          


          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                
                code:"",
                facility:"",
              quantity:"",
              subcat:"",
               category:""
                // type:"",
                // literdistance:"",
                // fuel:""
                
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
          
          <h3 align="center">Mobile combution</h3>
          
          <label>facality code:</label>
            <input
              type="text"
              placeholder="Facility code"
              name="code"
              onChange={setVal}
              value={inpval.code}
              id="code"
            />
            <label>category:</label>
            <input
              type="text"
              placeholder="category"
              name="category"
              onChange={setVal}
              value={inpval.category}
              id="category"
            />
            <label>sub-category:</label>
            
            <input
              type="text"
              placeholder="subcat"
              name="subcat"
              onChange={setVal}
              value={inpval.subcat}
              id="subcat"
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
            <label>select type of fuel:</label>
             <div>
      <select value={fuel} onChange={setValss}>
        <option value="JetFuel">JetFuel</option>
        <option value="AviationGasoline">AviationGasoline</option>
        <option value="OnRoadDieselFuel">On-RoadDieselFuel</option>
        <option value="GasolinePetrol">GasolinePetrol</option>
        <option value="ResidualFuelOil">ResidualFuelOil</option>
        <option value="LPG">LPG</option>
        <option value="LNG">LNG</option>
        <option value="CNG">CNG</option>
        <option value="Ethanol">Ethanol</option>
        <option value="Biodiesel">Biodiesel</option>
        <option value="EthanolGasoline">EthanolGasoline</option>
        <option value="BiodieselDiesel">BiodieselDiesel</option>
        

        
        
       
      </select>
      {/* <p>{`You selected ${type}`}</p> */}
    </div>
            <label>quantity of fuel:</label>
            <input
              type="number"
              placeholder="quantity"
              name="quantity"
              onChange={setVal}
              value={inpval.quantity}
              id="quantity"
            />
            <label>kilometer/liter:</label>
             <div>
      <select value={literdistance} onChange={setVals}>
        <option value="liter">liter</option>
        <option value="km">kilometer</option>
        
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

export default Mcomp;