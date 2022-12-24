
import "./CompanyForm.scss";
import Card from "./card/Card";
import React, { Component ,useState} from 'react';
import axios from 'axios';
import { NavLink,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Capitalgoods = () =>{
 

  //const [type, setType] = useState(getInitialState);

  const [transport, settransport] = useState("road");
  const [vehicle, setvehicle] = useState("bus");
  const [transport2, settransport2] = useState("road");
  const [vehicle2, setvehicle2] = useState("bus");
  const [transport3, settransport3] = useState("road");
  const [vehicle3, setvehicle3] = useState("bus");
 
  
  
const [inpval, setInpval] = useState({
     
    energy:"",employeename:"",employeecode:"",code3:"",facility3:"",quantity2:"",code2:"",facility2:"",
    quantity:"",material:"",distance:"",facility:"",byerlocation:"",byername:"",code:""
     
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

      const {  energy,employeename,employeecode,code3,facility3,quantity2,code2,facility2,
        quantity,material,distance,facility,byerlocation,byername,code} = inpval;

         
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



          const data = await fetch("/cap", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                energy,employeename,employeecode,code3,facility3,vehicle2,transport2,quantity2,code2,facility2,
quantity,material,distance,vehicle,transport,facility,byerlocation,byername,code
              })
          });

          const res = await data.json();
          console.log(res)

          


          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                energy:"",employeename:"",employeecode:"",code3:"",facility3:"",quantity2:"",code2:"",facility2:"",
                quantity:"",material:"",distance:"",facility:"",byerlocation:"",byername:"",code:""

                
             });}else {
              toast.error("Fail!", {
                position: "top-center"
            });
              }

          
  }}
  
//energy,employeename,employeename,employeecode,code3,facility3,vehicle2,transport2,quantity2,code2,facility2,
//quantity,material,distance,vehicle,transport,facility,byerlocation,byername,code


    return(
        <>
        
        <div className="add-company-name">
        <form>
         <Card cardClass={"card"}>
          
          <h3 align="center">Capital goods</h3>
          
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
            <label>byerlocation:</label>
            
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
     <label>material purchased:</label>
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
          
          <h1>vehicles</h1>
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
             
            <label>distance travelled in KM:</label>
            <input
              type="number"
              placeholder="quantity"
              name="quantity2"
              onChange={setVal}
              value={inpval.quantity2}
              id="quantity2"
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
          <h1>building as facilities</h1>
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
            /><label>size of building:</label>
            <input
              type="text"
              placeholder="employee code"
              name="employeecode"
              onChange={setVal}
              value={inpval.employeecode}
              id="employeecode"
            /><label>Location:</label>
            <input
              type="text"
              placeholder="name of the employee"
              name="employeename"
              onChange={setVal}
              value={inpval.employeename}
              id="employeename"
            /><label>Energy consumption in kw:</label>
            <input
              type="text"
              placeholder="energy"
              name="energy"
              onChange={setVal}
              value={inpval.energy}
              id="energy"
            />
  
            <div className="--my" align="center" >
            <button className='--btn-primary' onClick={addCompanydata}>Submit</button>
            {/* <p>next page<NavLink to="/dash">Go</NavLink></p> */}
            </div>
            <ToastContainer />
        </Card>  </form>
      </div></>
  
    )}

export default Capitalgoods;