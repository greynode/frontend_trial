
import "./CompanyForm.scss";
import Card from "./card/Card";
import React, { Component ,useState} from 'react';
import axios from 'axios';
import { NavLink,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Upstream = () =>{
 

  //const [type, setType] = useState(getInitialState);

  const [transport, settransport] = useState("road");
  const [vehicle, setvehicle] = useState("bus");
  const [transport2, settransport2] = useState("road");
  const [vehicle2, setvehicle2] = useState("bus");
  const [transport3, settransport3] = useState("road");
  const [vehicle3, setvehicle3] = useState("bus");
 
  
  
const [inpval, setInpval] = useState({
     
    distance:"",material:"",quantity:"",code:"",byername:"",byerlocation:"",facility:"",facility2:"",code2:"",
    waste:"",dispose:"",quantity2:"",facility3:"",
    code3:"",employeecode:"",employeename:"",from:"",to:"",employeecode2:"",employeename2:"",distance2:"",
    facility4:"",code4:"",from2:"",to2:"",distance3:"",period:"",asset:""
     
  });

    const setValss = (e) => {
      settransport(e.target.value)}
      const setVals = (e) => {
        setvehicle(e.target.value)}
        const setValss2 = (e) => {
            settransport2(e.target.value)}
            const setVals2 = (e) => {
              setvehicle2(e.target.value)}
              const setValss3 = (e) => {
                settransport3(e.target.value)}
                const setVals3 = (e) => {
                  setvehicle3(e.target.value)}
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

      const {  distance,material,quantity,code,byername,byerlocation,facility,facility2,code2,waste,dispose,quantity2,facility3,
        code3,employeecode,employeename,from,to,employeecode2,employeename2,distance2
        ,facility4,code4,from2,to2,distance3,period,asset} = inpval;

         
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



          const data = await fetch("/upstream", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                distance,material,quantity,code,byername,byerlocation,facility,transport,vehicle,facility2,code2,waste,dispose,quantity2,facility3,
                code3,employeecode,employeename,from,to,employeecode2,employeename2,distance2,transport2,
                vehicle2,facility4,code4,from2,to2,distance3,transport3,period,asset,vehicle3
              })
          });

          const res = await data.json();
          console.log(res)

          


          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                
                distance:"",material:"",quantity:"",code:"",byername:"",byerlocation:"",facility:"",facility2:"",code2:"",
                waste:"",dispose:"",quantity2:"",facility3:"",
                code3:"",employeecode:"",employeename:"",from:"",to:"",employeecode2:"",employeename2:"",distance2:"",
                facility4:"",code4:"",from2:"",to2:"",distance3:"",period:"",asset:""

                
             });}else {
              toast.error("Fail!", {
                position: "top-center"
            });
              }

          
  }}
  
//distance,material,quantity,code,byername,byerlocation,facility,transport,vehicle,facility2,code2,waste,dispose,quantity2,facility3
//code3,employeecode,employeename,from,to,distance2,employeecode2,employeename2,distance2,transport2,
//vehicle2,facility4,code4,from2,to2,distance3,transport3,period,asset,vehicle3

    return(
        <>
        
        <div className="add-company-name">
        <form>
         <Card cardClass={"card"}>
          
          <h3 align="center">Upstream</h3>
          
          <label>facality code:</label>
            <input
              type="text"
              placeholder="Facility code"
              name="code"
              onChange={setVal}
              value={inpval.code}
              id="code"
            />
            <label>byername:</label>
            <input
              type="text"
              placeholder="byername"
              name="byername"
              onChange={setVal}
              value={inpval.byername}
              id="byername"
            />
            <label>sub-byername:</label>
            
            <input
              type="text"
              placeholder="byerlocation"
              name="byerlocation"
              onChange={setVal}
              value={inpval.byerlocation}
              id="byerlocation"
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
      <select value={transport} onChange={setValss}>
        <option value="road">Road</option>
        <option value="rail">Rail</option>
        <option value="air">Air</option>
        <option value="water">Water</option>
       
        
       
      </select>
    
    </div><label>select type of vehicle:</label>
             <div>
      <select value={vehicle} onChange={setVals}>
        <option value="twowheelerpetrol">two wheeler petrol</option>
        <option value="twowheelerelectric">two wheeler electric</option>
        <option value="carpetrol">car petrol</option>
        <option value="carelectric">car electric</option>
        <option value="truck">truck</option>
        <option value="bus">bus</option>
        <option value="van">van</option>
        <option value="auto">auto</option>
        <option value="airplane">airplane</option>
        <option value="train">train</option>
        <option value="ship">ship</option>
        <option value="boat">boat</option>
        <option value="combinevahicle">combinevahicle</option>
     
   
       
        
       
      </select>
    
    </div>
            <label>distance travelled in KM:</label>
            <input
              type="number"
              placeholder="distance"
              name="distance"
              onChange={setVal}
              value={inpval.distance}
              id="distance"
            />
     <label>material:</label>
            <input
              type="text"
              placeholder="material"
              name="material"
              onChange={setVal}
              value={inpval.material}
              id="material"
            />
             <label>quantity:</label>
            <input
              type="number"
              placeholder="quantity"
              name="quantity"
              onChange={setVal}
              value={inpval.quantity}
              id="quantity"
            />
          
          <h1>waste generated</h1>
          <label>facility name:</label>
            <input
              type="text"
              placeholder="facility2"
              name="facility2"
              onChange={setVal}
              value={inpval.facility2}
              id="pass2"
            /> <label>facality code:</label>
            <input
              type="text"
              placeholder="Facility code"
              name="code2"
              onChange={setVal}
              value={inpval.code2}
              id="code2"
            />
             <label>type of waste generated:</label>
            <input
              type="text"
              placeholder="waste"
              name="waste"
              onChange={setVal}
              value={inpval.waste}
              id="waste"
            />   <label>method of dispose:</label>
            <input
              type="string"
              placeholder="dispose"
              name="dispose"
              onChange={setVal}
              value={inpval.dispose}
              id="dispose"
            />
            <label>quantity:</label>
            <input
              type="number"
              placeholder="quantity"
              name="quantity2"
              onChange={setVal}
              value={inpval.quantity2}
              id="quantity2"
            />
          <h1>Business travel </h1>
          <label>facility name:</label>
            <input
              type="text"
              placeholder="facility"
              name="facility3"
              onChange={setVal}
              value={inpval.facility3}
              id="pass3"
            /> <label>facality code:</label>
            <input
              type="text"
              placeholder="Facility code"
              name="code3"
              onChange={setVal}
              value={inpval.code3}
              id="code3"
            /><label>employee code:</label>
            <input
              type="text"
              placeholder="employee code"
              name="employeecode"
              onChange={setVal}
              value={inpval.employeecode}
              id="employeecode"
            /><label>name of the employee:</label>
            <input
              type="text"
              placeholder="name of the employee"
              name="employeename"
              onChange={setVal}
              value={inpval.employeename}
              id="employeename"
            /><label>From:</label>
            <input
              type="text"
              placeholder="from"
              name="from"
              onChange={setVal}
              value={inpval.from}
              id="from"
            /><label>To:</label>
            <input
              type="text"
              placeholder="to"
              name="to"
              onChange={setVal}
              value={inpval.to}
              id="to"
            />
             <label>distance travelled in KM:</label>
            <input
              type="number"
              placeholder="distance"
              name="distance2"
              onChange={setVal}
              value={inpval.distance2}
              id="distance2"
            />
            <label>select mode of transport:</label>
             <div>
      <select value={transport2} onChange={setValss2}>
        <option value="road">Road</option>
        <option value="rail">Rail</option>
        <option value="air">Air</option>
        <option value="water">Water</option>
       
        
       
      </select>
    
    </div><label>select type of vehicle:</label>
             <div>
      <select value={vehicle2} onChange={setVals2}>
        <option value="twowheelerpetrol">two wheeler petrol</option>
        <option value="twowheelerelectric">two wheeler electric</option>
        <option value="carpetrol">car petrol</option>
        <option value="carelectric">car electric</option>
        <option value="truck">truck</option>
        <option value="bus">bus</option>
        <option value="van">van</option>
        <option value="auto">auto</option>
        <option value="airplane">airplane</option>
        <option value="train">train</option>
        <option value="ship">ship</option>
        <option value="boat">boat</option>
        <option value="combinevahicle">combinevahicle</option>
     
   
       
        
       
      </select>
    
    </div>
    <h1>Employee commuting</h1>
    <label>facility name:</label>
            <input
              type="text"
              placeholder="facility"
              name="facility4"
              onChange={setVal}
              value={inpval.facility4}
              id="pass4"
            /> <label>facality code:</label>
            <input
              type="text"
              placeholder="Facility code"
              name="code4"
              onChange={setVal}
              value={inpval.code4}
              id="code4"
            /><label>employee code:</label>
            <input
              type="text"
              placeholder="employee code"
              name="employeecode2"
              onChange={setVal}
              value={inpval.employeecode2}
              id="employeecode2"
            /><label>name of the employee:</label>
            <input
              type="text"
              placeholder="name of the employee"
              name="employeename2"
              onChange={setVal}
              value={inpval.employeename2}
              id="employeename2"
            /><label>From:</label>
            <input
              type="text"
              placeholder="from"
              name="from2"
              onChange={setVal}
              value={inpval.from2}
              id="from2"
            /><label>To:</label>
            <input
              type="text"
              placeholder="to"
              name="to2"
              onChange={setVal}
              value={inpval.to2}
              id="to2"
            />
             <label>distance travelled in KM:</label>
            <input
              type="number"
              placeholder="distance"
              name="distance3"
              onChange={setVal}
              value={inpval.distance3}
              id="distance3"
            />
            <label>select mode of transport:</label>
             <div>
      <select value={transport3} onChange={setValss3}>
        <option value="road">Road</option>
        <option value="rail">Rail</option>
        <option value="air">Air</option>
        <option value="water">Water</option>
       
        
       
      </select>
    
    </div><label>select type of vehicle:</label>
             <div>
      <select value={vehicle3} onChange={setVals3}>
        <option value="twowheelerpetrol">two wheeler petrol</option>
        <option value="twowheelerelectric">two wheeler electric</option>
        <option value="carpetrol">car petrol</option>
        <option value="carelectric">car electric</option>
        <option value="truck">truck</option>
        <option value="bus">bus</option>
        <option value="van">van</option>
        <option value="auto">auto</option>
        <option value="airplane">airplane</option>
        <option value="train">train</option>
        <option value="ship">ship</option>
        <option value="boat">boat</option>
        <option value="combinevahicle">combinevahicle</option>
     
   
       
        
       
      </select>
    
    </div>

    <h1>Leased assets </h1>

             <label>Type of leased asset:</label>
            <input
              type="text"
              placeholder="type of leased asset"
              name="asset"
              onChange={setVal}
              value={inpval.asset}
              id="asset"
            />
             <label>Lease period:</label>
            <input
              type="number"
              placeholder="period"
              name="period"
              onChange={setVal}
              value={inpval.period}
              id="period"
            />
            
  
            <div className="--my" align="center" >
            <button className='--btn-primary' onClick={addCompanydata}>Submit</button>
            {/* <p>next page<NavLink to="/dash">Go</NavLink></p> */}
            </div>
            <ToastContainer />
        </Card>  </form>
      </div></>
  
    )}

export default Upstream;