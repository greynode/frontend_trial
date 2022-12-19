
import "./CompanyForm.scss";
import Card from "./card/Card";
import React, { Component ,useState} from 'react';
import axios from 'axios';
import { NavLink,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Fugitive = () =>{
 
  const getInitialStates = () => {
    const type = "chiller";
    return type;
  };

  //const [type, setType] = useState(getInitialState);
  const [refrigeration, setrefrigeration] = useState(getInitialStates);
  const [refrigerant, setrefrigerant] = useState("R401A");
 
  
  
const [inpval, setInpval] = useState({
     
      code:"",
      facility:"",
      i:"",
      f:"",
      g:"",
      h:"",
      j:""
      // type:type,
      // literdistance:literdistance,
      // refrigerant:refrigerant
     
  });
  const setVals = (e) => {
    setrefrigerant(e.target.value)}
    const setValss = (e) => {
        setrefrigeration(e.target.value)}
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

      const { code,facility,i,g,f,h,j} = inpval;

         
         if (code === "") {
          toast.warning("code is required!", {
              position: "top-center"
          });}
          else if (facility === "") {
            toast.warning("Facility is required!", {
                position: "top-center"
            });
            }else{
//calculation
console.log(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j);
const R401A=	16
const R401B=	14
const R401C=	19
const R402A=	2100
const R402B=	1330
const R403B=	3444
const R404A=	3922
const R406A=	0
const R407A=	2107
const R407B=	2804
const R407C=	1774
const R407D=	1627
const R407E=	1552
const R408A=	2301
const R409A=	0
const R410A=	2088
const R410B=	2229
const R411A=	14
const R411B=	4
const R413A=	2053
const R414A=	0
const R414B=	0
const R417A=	2346
const R422A=	3143
const R422D=	2729
const R423A=	2280
const R424A=	2440
const R426A=	1508
const R428A=	3607
const R434A=	3245
const R500	=32
const R502	=0
const R504	=325
const R507	=3985
const R508A=	13214
const R508B=	13396 



function R401As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R401A)
    return result
     
}function R401Bs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R401B)
    return result
     
}function R401Cs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R401C)
    return result
     
}function R402As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R402A)
    return result
     
}function R402Bs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R402B)
    return result
     
}function R403Bs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R403B)
    return result
     
}function R404As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R404A)
    return result
     
}function R406As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R406A)
    return result
     
}function R407As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R407A)
    return result
     
}function R407Bs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R407B)
    return result
     
}function R407Cs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R407C)
    return result
     
}function R407Ds(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R407D)
    return result
     
}function R407Es(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R407E)
    return result
     
}function R408As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R408A)
    return result
     
}function R409As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R409A)
    return result
     
}function R410As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R410A)
    return result
     
}function R411As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R411A)
    return result
     
}function R410Bs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R410B)
    return result
     
}function R411Bs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R411B)
    return result
     
}function R413As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R413A)
    return result
     
}function R414As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R414A)
    return result
     
}function R414Bs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R414B)
    return result
     
}function R422As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R422A)
    return result
     
}function R417As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R417A)
    return result
     
}function R422Ds(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R422D)
    return result
     
}function R423As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R423A)
    return result
     
}function R424As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R424A)
    return result
     
}function R426As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R426A)
    return result
     
}function R428As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R428A)
    return result
     
}function R434As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R434A)
    return result
     
}function R500s(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R500)
    return result
     
}function R502s(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R502)
    return result
     
}function R504s(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R504)
    return result
     
}function R507s(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R507)
    return result
     
}function R508As(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R508A)
    return result
     
}function R508Bs(calf,calg,calh,cali,calj){
    var result=(((calf-calg)+calh+(cali-calj))*R508B)
    return result
     
}



//in km




      
                



//calf,calg,calh,cali,calj

let val="null"
  if(refrigerant==="R401A"){
 val =R401As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)}
 else if(refrigerant==="R401B"){
    val =R401Bs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R401C"){
    val =R401Cs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)

} else if(refrigerant==="R402A"){
    val =R402As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R402B"){
    val =R402Bs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R403B"){
    val =R403Bs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R404A"){
    val =R404As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R406A"){
    val =R406As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R407A"){
    val =R407As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R407B"){
    val =R407Bs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R407C"){
    val =R407Cs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R407D"){
    val =R407Ds(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R407E"){
    val =R407Es(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R408A"){
    val =R408As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R409A"){
    val =R409As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R410A"){
    val =R410As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R410B"){
    val =R410Bs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R411A"){
    val =R411As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R411B"){
    val =R411Bs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R413A"){
    val =R413As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R414A"){
    val =R414As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R414B"){
    val =R414Bs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R417A"){
    val =R417As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R422A"){
    val =R422As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R422D"){
    val =R422Ds(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R423A"){
    val =R423As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R424A"){
    val =R424As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R426A"){
    val =R426As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R428A"){
    val =R428As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R434A"){
    val =R434As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R500"){
    val =R500s(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R502"){
    val =R502s(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R504"){
    val =R504s(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R507"){
    val =R507s(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R508A"){
    val =R508As(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} else if(refrigerant==="R508B"){
    val =R508Bs(inpval.f,inpval.g,inpval.h,inpval.i,inpval.j)
} 
 else{
  console.log("errr");
}



            let co2=val
           
            







          const data = await fetch("/fug", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                code,facility,i,f,g,h,j,refrigerant,refrigeration,co2
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
                i:"",
                f:"",
                g:"",
                h:"",
                j:""
                
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
          
          <h3 align="center">Fugitive Emmision</h3>
          
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
            <label>select type of refrigeration used :</label>
             <div>
      <select value={refrigeration} onChange={setValss}>
        <option value="chiller">Chiller</option>
        <option value="foodrefregration">Foodrefregration</option>
        <option value="freezers">Freezers</option>
        <option value="coldstorage">coldstorage</option>
        <option value="Industrialprocessrefrigeration">Industrial process refrigeration</option>
        <option value="HouseholdrefrigerationG">Household refrigeration</option>
        <option value="Refrigeratedtransport">Refrigerated transport</option>
        <option value="Domesticairconditioning">Domestic air conditioning</option>
        <option value="HVACs">HVACs</option>
        <option value="airconditioningsystems">Commercial unitary air conditioning systems</option>
        <option value="Mobileairconditioning">Mobile air conditioning</option>
        
</select></div>

        
        <label>select type of refrigerant:</label>
             <div>
      <select value={refrigerant} onChange={setVals}>
               <option value="R401A">R-401A</option>
               <option value="R401B">R-401B</option>
               <option value="R401C">R-401C</option>
               <option value="R402A">R-402A</option>
               <option value="R402B">R-402B</option>
               <option value="R403B">R-403B</option>
               <option value="R404A">R-404A</option>
               <option value="R406A">R-406A</option>
               <option value="R407A">R-407A</option>
               <option value="R407B">R-407B</option>
               <option value="R407C">R-407C</option>
               <option value="R407D">R-407D</option>
               <option value="R407E">R-407E</option>
               <option value="R408A">R-408A</option>
               <option value="R409A">R-409A</option>
               <option value="R410A">R-410A</option>
               <option value="R410B">R-410B</option>
               <option value="R411A">R-411A</option>
               <option value="R411B">R-411B</option>
               <option value="R413A">R-413A</option>
               <option value="R414A">R-414A</option>
               <option value="R414B">R-414B</option>
               <option value="R417A">R-417A</option>
               <option value="R422A">R-422A</option>
               <option value="R422D">R-422D</option>
               <option value="R423A">R-423A</option>
               <option value="R424A">R-424A</option>
               <option value="R426A">R-426A</option>
               <option value="R428A">R-428A</option>
               <option value="R434A">R-434A</option>
               <option value="R500">R-500</option>
               <option value="R502">R-502</option>
               <option value="R504">R-504</option>
               <option value="R507">R-507</option>
               <option value="R508A">R-508A</option>
               <option value="R508B">R-508B</option>
                </select>
 
  
    
    </div>
            <label>Amount of refrigerant used to charge new equipment:</label>
            <input
              type="number"
              placeholder="refrigerant"
              name="f"
              onChange={setVal}
              value={inpval.f}
              id="f"
            />
             <label>Total refrigerant capacity of the equipment:</label>
            <input
              type="number"
              placeholder="refrigerant capacity"
              name="g"
              onChange={setVal}
              value={inpval.g}
              id="g"
            /> <label>Amount of refrigerant bought to service the equipment:</label>
            <input
              type="number"
              placeholder="refrigerant bought"
              name="h"
              onChange={setVal}
              value={inpval.h}
              id="h"
            /> <label>Total refrigerant capacity of retiring equipment:</label>
            <input
              type="number"
              placeholder="refrigerant capacity of retiring"
              name="i"
              onChange={setVal}
              value={inpval.i}
              id="i"
            />
            <label>Refrigerant recovered from the retiring equipment:</label>
            <input
              type="number"
              placeholder="Refrigerant recovered"
              name="j"
              onChange={setVal}
              value={inpval.j}
              id="j"
            />
            
            <div className="--my" align="center" >
            <button className='--btn-primary' onClick={addCompanydata}>Submit</button>
       
            </div>
            <ToastContainer />
        </Card>  </form>
      </div></>
  
    )}

export default Fugitive;