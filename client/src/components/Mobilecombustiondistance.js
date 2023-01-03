
import "./CompanyForm.scss";
import Card from "./card/Card";
import React, { Component ,useState} from 'react';
import axios from 'axios';
import { NavLink,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Mcompdist = () =>{
  const getInitialState = () => {
    const type = "Boilers";
    return type;
  };
  const getInitialStates = () => {
    const type = "liter";
    return type;
  };

  //const [type, setType] = useState(getInitialState);

  const [fuel, setFuel] = useState("HeavygoodsvehicleEthanol");
 
  
  
const [inpval, setInpval] = useState({
     
      code:"",
      facility:"",
      distance:"",
      subcat:"",
      category:""
      // type:type,
      // literdistance:literdistance,
      // fuel:fuel
     
  });

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

      const { code,facility,distance ,category,subcat} = inpval;

         
         if (code === "") {
          toast.warning("code is required!", {
              position: "top-center"
          });}
          else if (facility === "") {
            toast.warning("Facility is required!", {
                position: "top-center"
            });
            }else if (distance === "") {
              toast.warning("distance is required!", {
                  position: "top-center"
              });}else{
//calculation

const BusEthanol	=0.69
const BusDiesel	=1.69
const BusGasoline	=1.06
const CarPetrol	=0.23
const CarDiesel	=0.27
const LightgoodsvehicleCNG 	=0.22
const LightgoodsvehicleLPG 	=0.21
const LightgoodsvehicleEthanol	=0.32
const LightgoodsvehiclePetrol	=0.32
const LightgoodsvehicleDiesel	=0.38
const HeavygoodsvehiclePetrol	=0.6
const HeavygoodsvehicleDiesel	=0.71
const HeavygoodsvehicleLPG 	=0.42
const HeavygoodsvehicleEthanol	=0.39





function BusEthanols(calc){
    var result=(calc*(BusEthanol))
    return result
     
}
function BusDiesels(calc){
    var result=(calc*(BusDiesel))
    return result
     
}function BusGasolines(calc){
    var result=(calc*(BusGasoline))
    return result
     
}function CarPetrols(calc){
    var result=(calc*(CarPetrol))
    return result
     
}function CarDiesels(calc){
    var result=(calc*(CarDiesel))
    return result
     
}function LightgoodsvehicleCNGs(calc){
    var result=(calc*(LightgoodsvehicleCNG))
    return result
     
}function LightgoodsvehicleLPGs(calc){
    var result=(calc*(LightgoodsvehicleLPG))
    return result
     
}function LightgoodsvehicleEthanols(calc){
    var result=(calc*(LightgoodsvehicleEthanol))
    return result
     
}function LightgoodsvehiclePetrols(calc){
    var result=(calc*(LightgoodsvehiclePetrol))
    return result
     
}function LightgoodsvehicleDiesels(calc){
    var result=(calc*(LightgoodsvehicleDiesel))
    return result
     
}function HeavygoodsvehiclePetrols(calc){
    var result=(calc*(HeavygoodsvehiclePetrol))
    return result
     
}
function HeavygoodsvehicleDiesels(calc){
    var result=(calc*(HeavygoodsvehicleDiesel))
    return result
     
}
function HeavygoodsvehicleLPGs(calc){
    var result=(calc*(HeavygoodsvehicleLPG))
    return result
     
}function HeavygoodsvehicleEthanols(calc){
    var result=(calc*(HeavygoodsvehicleEthanol))
    return result
     
}






      
                
let val="null"


// HeavygoodsvehicleEthanol
// HeavygoodsvehicleLPG
// HeavygoodsvehicleDiesel
// LightgoodsvehicleDiesel
// LightgoodsvehiclePetrol
// LightgoodsvehicleEthanol
// LightgoodsvehicleLPG
// LightgoodsvehicleCNG
// CarDiesel
// CarPetrol
// BusGasoline
// BusDiesel
// BusEthanol




  if(fuel==="HeavygoodsvehicleEthanol"){
 val =HeavygoodsvehicleEthanols(inpval.distance)}
 else if(fuel==="HeavygoodsvehicleLPG"){
  val =HeavygoodsvehicleLPGs(inpval.distance)
}
else if(fuel==="HeavygoodsvehicleDiesel"){
  val =HeavygoodsvehicleDiesels(inpval.distance)
}else if(fuel==="LightgoodsvehicleDiesel"){
  val =LightgoodsvehicleDiesels(inpval.distance)
}else if(fuel==="LightgoodsvehiclePetrol"){
  val =LightgoodsvehiclePetrols(inpval.distance)
}else if(fuel==="LightgoodsvehicleEthanol"){
  val =LightgoodsvehicleEthanols(inpval.distance)
}else if(fuel==="LightgoodsvehicleLPG"){
  val =LightgoodsvehicleLPGs(inpval.distance)
}else if(fuel==="LightgoodsvehicleCNG"){
  val =LightgoodsvehicleCNGs(inpval.distance)
}else if(fuel==="CarDiesel"){
  val =CarDiesels(inpval.distance)
}else if(fuel==="CarPetrol"){
  val =CarPetrols(inpval.distance)
}else if(fuel==="BusGasoline"){
  val =BusGasolines(inpval.distance)
}else if(fuel==="BusEthanol"){
  val =BusEthanols(inpval.distance)
}else if(fuel==="HeavygoodsvehiclePetrol"){
  val =HeavygoodsvehiclePetrols(inpval.distance)
}
else if(fuel==="BusDiesel"){
  val =BusDiesels(inpval.distance)
}else{
  console.log("errr");
}




            let co2=val
           
            







          const data = await fetch("/mcompdist", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                code,facility,distance,fuel,co2,category,subcat
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
              distance:"",
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
            <label>select mode of transport:</label>
             <div>
      <select value={fuel} onChange={setValss}>
        <option value="HeavygoodsvehicleEthanol">HeavygoodsvehicleEthanol</option>
        <option value="HeavygoodsvehicleLPG">HeavygoodsvehicleLPG</option>
        <option value="HeavygoodsvehicleDiesel">HeavygoodsvehicleDiesel</option>
        <option value="LightgoodsvehicleDiesel">LightgoodsvehicleDiesel</option>
        <option value="LightgoodsvehiclePetrol">LightgoodsvehiclePetrol</option>
        <option value="LightgoodsvehicleEthanol">LightgoodsvehicleEthanol</option>
        <option value="LightgoodsvehicleLPG">LightgoodsvehicleLPG</option>
        <option value="LightgoodsvehicleCNG">LightgoodsvehicleCNG</option>
        <option value="CarDiesel">CarDiesel</option>
        <option value="CarPetrol">CarPetrol</option>
        <option value="BusGasoline">BusGasoline</option>
        <option value="BusEthanol">BusEthanol</option>
        <option value="BusDiesel">BusDiesel</option>
        
       
      </select>
      {/* <p>{`You selected ${type}`}</p> */}
    </div>
            <label>distance:</label>
            <input
              type="number"
              placeholder="distance"
              name="distance"
              onChange={setVal}
              value={inpval.distance}
              id="distance"
            />
    
          
          
            {/* <label>select type of equipment:</label> */}
             <div>
      {/* <select value={type} onChange={setValsss}>
        <option value="Boilers">Boilers</option>
        <option value="Furnace">Furnace</option>
        <option value="Heaters">Heaters</option>
        <option value="Kilns">Kilns</option>
        <option value="OvensFlares">OvensFlares</option>
        <option value="Thermaloxiders">Thermaloxiders</option>
         <option value="Dryers">Dryers</option>
        <option value="otherequipment">OtherEquipment</option>
       
      </select> */}
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

export default Mcompdist;