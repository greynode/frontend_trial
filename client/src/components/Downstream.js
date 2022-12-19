
import "./CompanyForm.scss";
import Card from "./card/Card";
import React, { Component ,useState} from 'react';
import axios from 'axios';
import { NavLink,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Downstream = () =>{
 

  //const [type, setType] = useState(getInitialState);

  const [transport, settransport] = useState("road");
  const [vehicle, setvehicle] = useState("bus");
 
  
  
const [inpval, setInpval] = useState({
     
    distance:"",material:"",quantity:"",code:"",byername:"",byerlocation:"",facility:"",code2:""
    ,byername2:"",byerlocation2:"",facility2:"",finalproduct:"",
quantity2:"",process:"",material2:"",productname:"",usagetime:"",
productname2:"",disposal:"",lease:"",namefranchise:"",location:""
,franchiseperiod:"",location2:""
     
    
  });

    const setValss = (e) => {
      settransport(e.target.value)}
      const setVals = (e) => {
        setvehicle(e.target.value)}
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

      const {distance,material,quantity,code,byername,byerlocation,facility,code2,byername2,byerlocation2,facility2
        ,finalproduct,quantity2,process,material2,productname,usagetime,productname2,disposal,lease,namefranchise,location
        ,franchiseperiod,location2} = inpval;

         
//          if (code === "") {
//           toast.warning("code is required!", {
//               position: "top-center"
//           });}
//           else if (facility === "") {
//             toast.warning("Facility is required!", {
//                 position: "top-center"
//             });
//             }else if (distance === "") {
//               toast.warning("distance is required!", {
//                   position: "top-center"
//               });}else{
// //calculation



          const data = await fetch("/downstream", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                distance,material,quantity,code,byername,byerlocation,facility,transport,vehicle,code2,byername2,byerlocation2,facility2
,finalproduct,quantity2,process,material2,productname,usagetime,productname2,disposal,lease,namefranchise,location
,franchiseperiod,location2       })
          });

          const res = await data.json();
          console.log(res)

          


          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                
                distance:"",material:"",quantity:"",code:"",byername:"",byerlocation:"",facility:"",code2:""
                ,byername2:"",byerlocation2:"",facility2:"",finalproduct:"",
            quantity2:"",process:"",material2:"",productname:"",usagetime:"",
            productname2:"",disposal:"",lease:"",namefranchise:"",location:""
            ,franchiseperiod:"",location2:""
                
             });}else {
              toast.error("Fail!", {
                position: "top-center"
            });
              }

          
  }
  
//distance,material,quantity,code,byername,byerlocation,facility,transport,vehicle,code2,byername2,byerlocation2,facility2
//,finalproduct,quantity2,process,material2,productname,usagetime,productname2,disposal,lease,namefranchise,location
//,franchiseperiod,location2


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
            <label>buyername:</label>
            <input
              type="text"
              placeholder="byername"
              name="byername"
              onChange={setVal}
              value={inpval.byername}
              id="byername"
            />
            <label>buyer location:</label>
            
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
          <h1>processing of sold goods</h1>


          <label>facality code:</label>
            <input
              type="text"
              placeholder="Facility code"
              name="code2"
              onChange={setVal}
              value={inpval.code2}
              id="code2"
            />
            <label>buyername:</label>
            <input
              type="text"
              placeholder="byername"
              name="byername2"
              onChange={setVal}
              value={inpval.byername2}
              id="byername2"
            />
            <label>buyer location:</label>
            
            <input
              type="text"
              placeholder="byerlocation"
              name="byerlocation2"
              onChange={setVal}
              value={inpval.byerlocation2}
              id="byerlocation2"
            />
             <label>facility name:</label>
            <input
              type="text"
              placeholder="facility"
              name="facility2"
              onChange={setVal}
              value={inpval.facility2}
              id="facility2"
            />
         
          <label>material:</label>
            <input
              type="text"
              placeholder="material"
              name="material2"
              onChange={setVal}
              value={inpval.material2}
              id="material2"
            />  <label>quantity:</label>
            <input
              type="number"
              placeholder="quantity"
              name="quantity2"
              onChange={setVal}
              value={inpval.quantity2}
              id="quantity2"
            /> <label>processing performed:</label>
            <input
              type="text"
              placeholder="process"
              name="process"
              onChange={setVal}
              value={inpval.process}
              id="process"
            />
            <label>Final product:</label>
            <input
              type="text"
              placeholder="finalproduct"
              name="finalproduct"
              onChange={setVal}
              value={inpval.finalproduct}
              id="finalproduct"
            />
             <label>select mode of transport:</label>
             <div>
      <select value={transport} onChange={setValss}>
        <option value="road">Road</option>
        <option value="rail">Rail</option>
        <option value="air">Air</option>
        <option value="water">Water</option>
       
        
       
      </select>
    
    </div>
    <label>select type of vehicle:</label>
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
             <h2>Use of sold products </h2>
             <label>name of the product:</label>
            <input
              type="text"
              placeholder="product name"
              name="productname"
              onChange={setVal}
              value={inpval.productname}
              id="productname"
            />
            <label>Time of usage:</label>
            <input
              type="text"
              placeholder="usage time"
              name="usagetime"
              onChange={setVal}
              value={inpval.usagetime}
              id="usagetime"
            />
            <h1>End of life treatment of sold products </h1>
            <label>name of the product:</label>
            <input
              type="text"
              placeholder="product name"
              name="productname2"
              onChange={setVal}
              value={inpval.productname2}
              id="productname2"
            />
            <label>Method of disposal:</label>
            <input
              type="text"
              placeholder="disposal method"
              name="disposal"
              onChange={setVal}
              value={inpval.disposal}
              id="disposal"
            />
              <h1>Downstream leased assets </h1>

<label>lease period:</label>
            <input
              type="text"
              placeholder="lease period"
              name="lease"
              onChange={setVal}
              value={inpval.lease}
              id="lease"
            />
            <h1>Franchises </h1>
            <label>name of franchise:</label>
            <input
              type="text"
              placeholder="name of franchise"
              name="namefranchise"
              onChange={setVal}
              value={inpval.namefranchise}
              id="namefranchise"
            />
            <label>Location:</label>
            <input
              type="text"
              placeholder="disposal method"
              name="location"
              onChange={setVal}
              value={inpval.location}
              id="location"
            />
            <label>Period of franchise:</label>
            <input
              type="text"
              placeholder="period of franchise"
              name="franchiseperiod"
              onChange={setVal}
              value={inpval.franchiseperiod}
              id="franchiseperiod"
            />
            <h1>Investments</h1>
            <label>type of investment:</label>
            <input
              type="text"
              placeholder="disposal method"
              name="investment"
              onChange={setVal}
              value={inpval.investment}
              id="investment"
            />
            <label>Location:</label>
            <input
              type="text"
              placeholder="disposal method"
              name="location2"
              onChange={setVal}
              value={inpval.location2}
              id="location2"
            />



            <div className="--my" align="center" >
            <button className='--btn-primary' onClick={addCompanydata}>Submit</button>
            {/* <p>next page<NavLink to="/dash">Go</NavLink></p> */}
            </div>
            <ToastContainer />
        </Card>  </form>
      </div></>
  
    )}

export default Downstream;