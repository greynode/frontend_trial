
import "./CompanyForm.scss";
import Card from "./card/Card";
import React, { Component ,useState} from 'react';
import axios from 'axios';
import { NavLink,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Mcompfreight = () =>{
 

  //const [type, setType] = useState(getInitialState);

  const [fuel, setFuel] = useState("AirLongHaul");
 
  
  
const [inpval, setInpval] = useState({
     
      code:"",
      facility:"",
      distance:"",
      
      weight:"",
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

      const { code,facility,distance ,category,weight} = inpval;

         
         if (code === "") {
          toast.warning("code is required!", {
              position: "top-center"
          });}
          else if (facility === "") {
            toast.warning("Facility is required!", {
                position: "top-center"
            });
            }else if (category === "") {
                toast.warning("category is required!", {
                    position: "top-center"
                });
                }else if (weight === "") {
                toast.warning("weigth must be number!", {
                    position: "top-center"
                });
                }else if (distance === "") {
              toast.warning("distance is required!", {
                  position: "top-center"
              });}
              else{
//calculation

const AirDomestic	=1.96
const AirShortHaul	=1.47
const AirLongHaul	=0.61
const Rail	=0.02
const Road	=0.3267
const Shipping	=0.0528






function AirDomestics(calc,cal){
    var result=((calc*AirDomestic)*cal)
    return result
     
}
function Shippings(calc,cal){
    var result=((calc*Shipping)*cal)
    return result
     
}function Roads(calc,cal){
    var result=((calc*Road)*cal)
    return result
     
}function Rails(calc,cal){
    var result=((calc*Rail)*cal)
    return result
     
}function AirLongHauls(calc,cal){
    var result=((calc*AirLongHaul)*cal)
    return result
     
}function AirShortHauls(calc,cal){
    var result=((calc*AirShortHaul)*cal)
    return result
     
}




      
                
let val="null"







  if(fuel==="AirShortHaul"){
 val =AirShortHauls(inpval.distance,inpval.weight)}
 else if(fuel==="Rail"){
  val =Rails(inpval.distance,inpval.weight)
}
else if(fuel==="Road"){
  val =Roads(inpval.distance,inpval.weight)
}else if(fuel==="Shipping"){
  val =Shippings(inpval.distance,inpval.weight)
}else if(fuel==="AirDomestic"){
  val =AirDomestics(inpval.distance,inpval.weight)
}else if(fuel==="AirLongHaul"){
  val =AirLongHauls(inpval.distance,inpval.weight)
}else{
  console.log("errr");
}




            let co2=val
           
            







          const data = await fetch("/mcompfreight", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                code,facility,distance,fuel,co2,category,weight
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
              weight:"",
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
          
          <h3 align="center">Mobile combution freight</h3>
          
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
            <label>weight:</label>
            
            <input
              type="number"
              placeholder="weight"
              name="weight"
              onChange={setVal}
              value={inpval.weight}
              id="weight"
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
        <option value="AirLongHaul">AirLongHaul</option>
        <option value="Shipping">Shipping</option>
        <option value="Road">Road</option>
        <option value="Rail">Rail</option>
        <option value="AirShortHaul">AirShortHaul</option>
        <option value="AirLongHaul">AirLongHaul</option>
        <option value="AirDomestic">AirDomestic</option>
        
        
       
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
    
          
          
         
             
            
  
            <div className="--my" align="center" >
            <button className='--btn-primary' onClick={addCompanydata}>Submit</button>
            {/* <p>next page<NavLink to="/dash">Go</NavLink></p> */}
            </div>
            <ToastContainer />
        </Card>  </form>
      </div></>
  
    )}

export default Mcompfreight;