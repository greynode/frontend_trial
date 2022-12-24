import "./CompanyForm.scss";
import Card from "./card/Card";
import React, { Component ,useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Fugitive2 = () =>{
  const getInitialState = () => {
    const type = "Boilers";
    return type;
  };
  const getInitialStates = () => {
    const type = "Carbon dioxide";
    return type;
  };

  //const [type, setType] = useState(getInitialState);
  const [gas, setgas] = useState(getInitialStates);
  const [fuel, setFuel] = useState("jetFuel");
  const [yesno, setyesno] = useState("yes");
  const [typegas,settypegas]=useState("CarbonDioxide");

const [inpval, setInpval] = useState({
     
      gases:"",
      code:"",
      facility:"",
      quantity:"",
      gas:"",
      typegas:"",
      facility2:"",
      fire:"",
      capacity:"",
      code2:"",
      fuel:""
      
      
      // type:type,
      // gas:ggasel
     
  });
  const setVals = (e) => {
    setgas(e.target.value)}
    const setValss = (e) => {
      setFuel(e.target.value)}
      const setValsss = (e) => {
        setyesno(e.target.value);}
        const setValssss = (e) => {
          settypegas(e.target.value);}
  

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

      const { gases,code,facility,quantity,gas,code2,facility2,fire,gas2,capacity } = inpval;

         
         if (code === "") {
          toast.warning("code is required!", {
              position: "top-center"
          });}
          else if (facility === "") {
            toast.warning("Facility is required!", {
                position: "top-center"
            });
            }
            else if (gases === "") {
              toast.warning("gases is required!", {
                  position: "top-center"
              });
              }
            else if (code2 === "") {
              toast.warning("code is required!", {
                  position: "top-center"
              });
              }
            else if (facility2 === "") {
              toast.warning("facility is required!", {
                  position: "top-center"
              });
              }
            else if (fire === "") {
              toast.warning("no. of equipments is required!", {
                  position: "top-center"
              });
              }
            else if (capacity === "") {
              toast.warning("capacity is required!", {
                  position: "top-center"
              });
              }
            else if (quantity === "") {
              toast.warning("quantity is required!", {
                  position: "top-center"
              });}else{
//calculation

const CarbonDioxide= 1
const Methane =	25
const NitrousOxide	=298
const SulfurHexafluoride=	22800
const NitrogenTrifluoride =	17200
const HFC23 =	14800
const HFC32 =	675
const HFC41=	92
const HFC125	=3500
const HFC134	=1100
const HFC134a =	1430
const HFC143 =	353
const HFC143a	=4470
const HFC152	=53
const HFC152a	=124
const HFC161	=12
const HFC227ea	=3220
const HFC236cb	=1340
const HFC236ea	=1370
const HFC236fa	=9810
const HFC245ca	=693
const HFC245fa	=1030
const HFC365mfc	=794
const HFC4310mee =1694
const PFC14=	7390
const PFC116	=12200
const PFC218	=8830
const PFC318	=10300
const PFC3110=	8860
const PFC4112=	9160
const PFC5114=	9300
const PFC9118=	7500


function carbondioxide(calc){
    var result=((calc*CarbonDioxide))
    return result
     
}
function methane(calc){
    var result=((calc*Methane))
    return result
     
}function nitrousoxide(calc){
    var result=((calc*NitrousOxide))
    return result
     
}function sulphurhexafluoride(calc){
    var result=((calc*SulfurHexafluoride))
    return result
     
}function nitrogentrifluoride(calc){
    var result=((calc*NitrogenTrifluoride))
    return result
     
}function hfc23(calc){
    var result=((calc*HFC23))
    return result
     
}function hfc32(calc){
    var result=((calc*HFC32))
    return result
     
}function hfc41(calc){
    var result=((calc*HFC41))
    return result
     
}function hfc125(calc){
    var result=((calc*HFC125))
    return result
     
}function hfc134(calc){
    var result=((calc*HFC134))
    return result
     
}function hfc134a(calc){
    var result=((calc*HFC134a))
    return result
     
}
function hfc143(calc){
    var result=((calc*HFC143))
    return result
     
}
function hfc143a(calc){
    var result=((calc*HFC143a))
    return result
     
}
function hfc152(calc){
    var result=((calc*HFC152))
    return result
     
}
function hfc152a(calc){
    var result=((calc*HFC152a))
    return result
     
}
function hfc161(calc){
    var result=((calc*HFC161))
    return result
     
}
function hfc227ea(calc){
    var result=((calc*HFC227ea))
    return result
     
}
function hfc236cb(calc){
    var result=((calc*HFC236cb))
    return result
     
}
function hfc236ea(calc){
    var result=((calc*HFC236ea))
    return result
     
}
function hfc236fa(calc){
    var result=((calc*HFC236fa))
    return result
     
}
function hfc245ca(calc){
    var result=((calc*HFC245ca))
    return result
     
}
function hfc245fa(calc){
    var result=((calc*HFC245fa))
    return result
     
}
function hfc365mfc(calc){
    var result=((calc*HFC365mfc))
    return result
     
}
function hfc4310mee(calc){
    var result=((calc*HFC4310mee))
    return result
     
}
function pfc14(calc){
    var result=((calc*PFC14))
    return result
     
}
function pfc116(calc){
    var result=((calc*PFC116))
    return result
     
}
function pfc218(calc){
    var result=((calc*PFC218))
    return result
     
}
function pfc318(calc){
    var result=((calc*PFC318))
    return result
     
}
function pfc3110(calc){
    var result=((calc*PFC3110))
    return result
     
}

function pfc4112(calc){
    var result=((calc*PFC4112))
    return result
     
}
function pfc5114(calc){
    var result=((calc*PFC5114))
    return result
     
}
function pfc9118(calc){
    var result=((calc*PFC9118))
    return result   
}



function carbondioxidef(calcc){
  var result=(calcc*CarbonDioxide*fire)
  return result
   
}
function methanef(calcc){
  var result=((calcc*Methane)*fire)
  return result
   
}function nitrousoxidef(calcc){
  var result=((calcc*NitrousOxide)*fire)
  return result
   
}function sulphurhexafluoridef(calcc){
  var result=((calcc*SulfurHexafluoride)*fire)
  return result
   
}function nitrogentrifluoridef(calcc){
  var result=((calcc*NitrogenTrifluoride)*fire)
  return result
   
}function hfc23f(calcc){
  var result=((calcc*HFC23)*fire)
  return result
   
}function hfc32f(calcc){
  var result=((calcc*HFC32)*fire)
  return result
   
}function hfc41f(calcc){
  var result=((calcc*HFC41)*fire)
  return result
   
}function hfc125f(calcc){
  var result=((calcc*HFC125)*fire)
  return result
   
}function hfc134f(calcc){
  var result=((calcc*HFC134)*fire)
  return result
   
}function hfc134af(calcc){
  var result=((calcc*HFC134a)*fire)
  return result
   
}
function hfc143f(calcc){
  var result=((calcc*HFC143)*fire)
  return result
   
}
function hfc143af(calcc){
  var result=((calcc*HFC143a)*fire)
  return result
   
}
function hfc152f(calcc){
  var result=((calcc*HFC152)*fire)
  return result
   
}
function hfc152af(calcc){
  var result=((calcc*HFC152a)*fire)
  return result
   
}
function hfc161f(calcc){
  var result=((calcc*HFC161)*fire)
  return result
   
}
function hfc227eaf(calcc){
  var result=((calcc*HFC227ea)*fire)
  return result
   
}
function hfc236cbf(calcc){
  var result=((calcc*HFC236cb)*fire)
  return result
   
}
function hfc236eaf(calcc){
  var result=((calcc*HFC236ea)*fire)
  return result
   
}
function hfc236faf(calcc){
  var result=((calcc*HFC236fa)*fire)
  return result
   
}
function hfc245caf(calcc){
  var result=((calcc*HFC245ca)*fire)
  return result
   
}
function hfc245faf(calcc){
  var result=((calcc*HFC245fa)*fire)
  return result
   
}
function hfc365mfcf(calcc){
  var result=((calcc*HFC365mfc)*fire)
  return result
   
}
function hfc4310meef(calcc){
  var result=((calcc*HFC4310mee)*fire)
  return result
   
}
function pfc14f(calcc){
  var result=((calcc*PFC14)*fire)
  return result
   
}
function pfc116f(calcc){
  var result=((calcc*PFC116)*fire)
  return result
   
}
function pfc218f(calcc){
  var result=((calcc*PFC218)*fire)
  return result
   
}
function pfc318f(calcc){
  var result=((calcc*PFC318)*fire)
  return result
   
}
function pfc3110f(calcc){
  var result=((calcc*PFC3110)*fire)
  return result
   
}

function pfc4112f(calcc){
  var result=((calcc*PFC4112)*fire)
  return result
   
}
function pfc5114f(calcc){
  var result=((calcc*PFC5114)*fire)
  return result
   
}
function pfc9118f(calcc){
  var result=((calcc*PFC9118)*fire)
  return result
   
}
               
let val=null

  if(fuel==="CarbonDioxide"){
 val =carbondioxide(inpval.quantity)}
 else if(fuel==="Methane"){
  val =methane(inpval.quantity)
  }
else if(fuel==="NitrousOxide"){
  val =nitrousoxide(inpval.quantity)
}else if(fuel==="SulphurHexafluoride"){
  val =sulphurhexafluoride(inpval.quantity)
}else if(fuel==="NitrogenTrifluoride"){
  val =nitrogentrifluoride(inpval.quantity)
}else if(fuel==="HFC23"){
  val =hfc23(inpval.quantity)
}else if(fuel==="HFC32"){
  val =hfc32(inpval.quantity)
}else if(fuel==="HFC41"){
  val =hfc41(inpval.quantity)
}else if(fuel==="HFC125"){
  val =hfc125(inpval.quantity)
}else if(fuel==="HFC134"){
  val =hfc134(inpval.quantity)
}else if(fuel==="HFC134a"){
  val =hfc134a(inpval.quantity)
}else if(fuel==="HFC143"){
  val =hfc143(inpval.quantity)
}
else if(fuel==="HFC143a"){
  val =hfc143a(inpval.quantity)
}
else if(fuel==="HFC152"){
  val =hfc152(inpval.quantity)
}
else if(fuel==="HFC152a"){
  val =hfc152a(inpval.quantity)
}
else if(fuel==="HFC161"){
  val =hfc161(inpval.quantity)
}
else if(fuel==="HFC227ea"){
  val =hfc227ea(inpval.quantity)
}
else if(fuel==="HFC236cb"){
  val =hfc236cb(inpval.quantity)
}
else if(fuel==="HFC236ea"){
  val =hfc236ea(inpval.quantity)
}
else if(fuel==="HFC236fa"){
  val =hfc236fa(inpval.quantity)
}
else if(fuel==="HFC245ca"){
  val =hfc245ca(inpval.quantity)
}
else if(fuel==="HFC245fa"){
  val =hfc245fa(inpval.quantity)
}
else if(fuel==="HFC365mfc"){
  val =hfc365mfc(inpval.quantity)
}
else if(fuel==="HFC4310mee"){
  val =hfc4310mee(inpval.quantity)
}
else if(fuel==="PFC14"){
  val =pfc14(inpval.quantity)
}
else if(fuel==="PFC116"){
  val =pfc116(inpval.quantity)
}
else if(fuel==="PFC218"){
  val =pfc218(inpval.quantity)
}
else if(fuel==="PFC318"){
  val =pfc318(inpval.quantity)
}
else if(fuel==="PFC3110"){
  val =pfc3110(inpval.quantity)
}
else if(fuel==="PFC4112"){
  val =pfc4112(inpval.quantity)
}
else if(fuel==="PFC5114"){
  val =pfc5114(inpval.quantity)
}
else if(fuel==="PFC9118"){
  val =pfc9118(inpval.quantity)
}
else{
  console.log("errr");
}

let vall=null

  if(typegas==="CarbonDioxidef"){
  vall =carbondioxidef(inpval.capacity)}
  else if(typegas==="Methanef"){
   vall =methanef(inpval.capacity)
 }
  else if(typegas==="NitrousOxidef"){
   vall =nitrousoxidef(inpval.capacity)
 }else if(typegas==="SulphurHexafluoridef"){
   vall =sulphurhexafluoridef(inpval.capacity)
 }else if(typegas==="NitrogenTrifluoridef"){
   vall =nitrogentrifluoridef(inpval.capacity)
 }else if(typegas==="HFC23f"){
   vall =hfc23f(inpval.capacity)
 }else if(typegas==="HFC32f"){
   vall =hfc32f(inpval.capacity)
 }else if(typegas==="HFC41f"){
   vall =hfc41f(inpval.capacity)
 }else if(typegas==="HFC125f"){
   vall =hfc125f(inpval.capacity)
 }else if(typegas==="HFC134f"){
   vall =hfc134f(inpval.capacity)
 }else if(typegas==="HFC134af"){
   vall =hfc134af(inpval.capacity)
 }else if(typegas==="HFC143f"){
   vall =hfc143f(inpval.capacity)
 }
  else if(typegas==="HFC143af"){
   vall =hfc143af(inpval.capacity)
 }
  else if(typegas==="HFC152f"){
   vall =hfc152f(inpval.capacity)
 }
  else if(typegas==="HFC152af"){
   vall =hfc152af(inpval.capacity)
 }
  else if(typegas==="HFC161f"){
   vall =hfc161f(inpval.capacity)
 }
  else if(typegas==="HFC227eaf"){
   vall =hfc227eaf(inpval.capacity)
 }
  else if(typegas==="HFC236cbf"){
   vall =hfc236cbf(inpval.capacity)
 }
  else if(typegas==="HFC236eaf"){
   vall =hfc236eaf(inpval.capacity)
 }
  else if(typegas==="HFC236faf"){
   vall =hfc236faf(inpval.capacity)
 }
  else if(typegas==="HFC245caf"){
   vall =hfc245caf(inpval.capacity)
 }
  else if(typegas==="HFC245faf"){
   vall =hfc245faf(inpval.capacity)
 }
  else if(typegas==="HFC365mfcf"){
   vall =hfc365mfcf(inpval.capacity)
 }
  else if(typegas==="HFC4310meef"){
   vall =hfc4310meef(inpval.capacity)
 }
  else if(typegas==="PFC14f"){
   vall =pfc14f(inpval.capacity)
 }
  else if(typegas==="PFC116f"){
   vall =pfc116f(inpval.capacity)
 }
  else if(typegas==="PFC218f"){
   vall =pfc218f(inpval.capacity)
 }
  else if(typegas==="PFC318f"){
   vall =pfc318f(inpval.capacity)
 }
  else if(typegas==="PFC3110f"){
   vall =pfc3110f(inpval.capacity)
 }
  else if(typegas==="PFC4112f"){
   vall =pfc4112f(inpval.capacity)
 }
  else if(typegas==="PFC5114f"){
   vall =pfc5114f(inpval.capacity)
 }
  else if(typegas==="PFC9118f"){
   vall =pfc9118f(inpval.capacity)
 }
  else{
   console.log("errr");
 }
 
            let co2=val
            let co3=vall
            
          const data = await fetch("/Fugitive2", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                gases,code,facility,quantity,gas,fuel,code2,facility2,gas2,fire,co2,co3,typegas,yesno,capacity })
          });

          const res = await data.json();
          console.log(res)
                if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                
                gas:"",
                gases:"",
                code:"",
                facility:"",
              quantity:"",
              code2:"",
              gas2:"",
              facility2:"",
              fire:"" ,
              capacity:"" ,
              typegas:"",
              fuel:""
               
                // type:"",
                // gagas   // fuel:""
                
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
          
          <h3 align="center">Fugitive Emission</h3>
          
          <label>purchased gases:</label>
            <input
              type="text"
              placeholder="purchased gases"
              name="gases"
              onChange={setVal}
              value={inpval.gases}
              id="gases"
            />
          <label>facility code:</label>
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
              id="facility"
            />
            <label>Type of gas purchased:</label>
             <div>
      <select value={fuel} onChange={setValss}>
        <option value="CarbonDioxide">Carbon Dioxide</option>
        <option value="Methane">Methane</option>
        <option value="NitrousOxide">Nitrous Oxide</option>
        <option value="SulphurHexafluoride">Sulphur Hexafluoride</option>
        <option value="NitrogenTrifluoride">Nitrogen Trifluoride</option>
        <option value="HFC23">HFC-23</option>
        <option value="HFC32">HFC-32</option>
        <option value="HFC41">HFC-41</option>
        <option value="HFC125">HFC-125</option>
        <option value="HFC134">HFC-134</option>
        <option value="HFC134a">HFC-134a</option>
        <option value="HFC143">HFC-143</option>
        <option value="HFC143a">HFC-143a</option>
        <option value="HFC152">HFC-152</option>
        <option value="HFC152a">HFC-152a</option>
        <option value="HFC161">HFC-161</option>
        <option value="HFC227ea">HFC-227ea</option>
        <option value="HFC236cb">HFC-236cb</option>
        <option value="HFC236ea">HFC-236ea</option>
        <option value="HFC236fa">HFC-236fa</option>
        <option value="HFC245ca">HFC-245ca</option>
        <option value="HFC245fa">HFC-245fa</option>
        <option value="HFC365mfc">HFC-365mfc</option>
        <option value="HFC4310mee">HFC-4310mee</option>
        <option value="PFC14">PFC-14</option>
        <option value="PFC116">PFC-116</option>
        <option value="PFC218">PFC-218</option>
        <option value="PFC318">PFC-318</option>
        <option value="PFC3110">PFC-3110</option>
        <option value="PFC4112">PFC-4112</option>
        <option value="PFC5114">PFC-5114</option>
        <option value="PFC9118">PFC-9118</option>
        
      </select>
      {/* <p>{`You selected ${type}`}</p> */}
    </div>
            <label>Amount of gas purchased:</label>
            <input
              type="number"
              placeholder="quantity"
              name="quantity"
              onChange={setVal}
              value={inpval.quantity}
              id="quantity"
            />
          <div>
      
      {/* <p>{`You selected ${type}`}</p> */}
    <label>Has fire equipment been used in any of the facilities?</label>
    </div>
      <div>
        <select value={yesno} onChange={setValsss} id="equipment" >
          <option value="yes">Yes</option>
          <option value="no">no</option>
        </select>
      </div>

      {/* if(equipment.value==="yes"){ */}
      
      
      <div>
      <label>Facility Code:</label>
            <input
              type="text"
              placeholder="facility code"
              name="code2"
              onChange={setVal}
              value={inpval.code2}
              id="code2"
            />
      <label>Name of the facility:</label>
            <input
              type="text"
              placeholder="facility name"
              name="facility2"
              onChange={setVal}
              value={inpval.facility2}
              id="facility2"
            />
            <label>Number of fire suppresant equipments:</label>
            <input
              type="number"
              placeholder="equipment"
              name="fire"
              onChange={setVal}
              value={inpval.fire}
              id="fire"
            />
            <label>Type of gas used:</label>
             <div>
      <select value={typegas} onChange={setValssss}>
        <option value="CarbonDioxidef">Carbon Dioxide</option>
        <option value="Methanef">Methane</option>
        <option value="NitrousOxidef">Nitrous Oxide</option>
        <option value="SulphurHexafluoridef">Sulphur Hexafluoride</option>
        <option value="NitrogenTrifluoridef">Nitrogen Trifluoride</option>
        <option value="HFC23f">HFC-23</option>
        <option value="HFC32f">HFC-32</option>
        <option value="HFC41f">HFC-41</option>
        <option value="HFC125f">HFC-125</option>
        <option value="HFC134f">HFC-134</option>
        <option value="HFC134af">HFC-134a</option>
        <option value="HFC143f">HFC-143</option>
        <option value="HFC143af">HFC-143a</option>
        <option value="HFC152f">HFC-152</option>
        <option value="HFC152af">HFC-152a</option>
        <option value="HFC161f">HFC-161</option>
        <option value="HFC227eaf">HFC-227ea</option>
        <option value="HFC236cbf">HFC-236cb</option>
        <option value="HFC236eaf">HFC-236ea</option>
        <option value="HFC236faf">HFC-236fa</option>
        <option value="HFC245caf">HFC-245ca</option>
        <option value="HFC245faf">HFC-245fa</option>
        <option value="HFC365mfcf">HFC-365mfc</option>
        <option value="HFC4310meef">HFC-4310mee</option>
        <option value="PFC14f">PFC-14</option>
        <option value="PFC116f">PFC-116</option>
        <option value="PFC218f">PFC-218</option>
        <option value="PFC318f">PFC-318</option>
        <option value="PFC3110f">PFC-3110</option>
        <option value="PFC4112f">PFC-4112</option>
        <option value="PFC5114f">PFC-5114</option>
        <option value="PFC9118f">PFC-9118</option>
        </select>
        </div>
        <label>Total capacity of the equipment:</label>
            <input
              type="number"
              placeholder="capacity"
              name="capacity"
              onChange={setVal}
              value={inpval.capacity}
              id="capacity"
            />
            </div>
            
            <div className="--my" align="center" >
            <button className="--btn-primary" onClick={addCompanydata}>Submit</button>
            {/* <p>next page<NavLink to="/dash">Go</NavLink></p> */}
            </div>
            <ToastContainer />
        </Card>  </form>
      </div></>
  
    )}

export default Fugitive2;