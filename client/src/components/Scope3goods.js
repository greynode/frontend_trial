
import "./CompanyForm.scss";
import Card from "./card/Card";
import React, { Component ,useState} from 'react';

import axios from 'axios';
import { NavLink,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Scope3goods = () =>{
  

  const [inpval, setInpval] = useState({
     
    period2:"",vendorlocation2:"",vendorname2:"",name2:"",code2:"",quantity:"",purchased:"",vendorlocation:"",
    vendorname:"",namegoods:"",codegoods:"",serviceavailed:""
     
  });


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

      const {period2,vendorlocation2,vendorname2,name2,code2,quantity,purchased,vendorlocation,vendorname,namegoods,serviceavailed,codegoods} = inpval;

         // name,user,currency, country, pointofcontact,productservices,id,employee,website,activity,address
         if (name2 === "") {
          toast.warning("name is required!", {
              position: "top-center"
          });}
          else if (code2 === "") {
            toast.warning("password is required!", {
                position: "top-center"
            });}else if (quantity === "") {
              toast.warning("password is required!", {
                  position: "top-center"
              });
            }else if (purchased === "") {
                toast.warning("password is required!", {
                    position: "top-center"
                });
              }else if (vendorlocation === "") {
                toast.warning("password is required!", {
                    position: "top-center"
                });
              }else{

        

          const data = await fetch("/scope3goods", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                period2,vendorlocation2,vendorname2,name2,code2,quantity,purchased,vendorlocation,vendorname,namegoods,codegoods,serviceavailed
              })
          });

          const res = await data.json();
          console.log(res)


          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                
                period2:"",vendorlocation2:"",vendorname2:"",name2:"",code2:"",quantity:"",purchased:"",vendorlocation:"",
    vendorname:"",namegoods:"",codegoods:"",serviceavailed:""
             });}else {
              toast.error(" name already there!", {
                position: "top-center"
            });
              }

          
  }}


    return(
        <>
        
        <div className="add-company-name">
        <form>
         <Card cardClass={"card"}>
          
          <h3 align="center">Scope 3</h3>
          <h3 >purchased goods:</h3>
          
          <label>Facility code:</label>
            <input
              type="text"
              placeholder=""
              name="codegoods"
              onChange={setVal}
              value={inpval.codegoods}
              id="codegoods"
            />
             <label>facility name:</label>
            <input
              type="text"
              placeholder=""
              name="namegoods"
              onChange={setVal}
              value={inpval.namegoods}
              id="namegoods"
            />
            <label>vendor Name:</label>
            <input
              type="text"
              placeholder=""
              name="vendorname"
              onChange={setVal}
              value={inpval.vendorname}
              id="vendorname"
            /><label>Vendor location:</label>
            <input
              type="text"
              placeholder=""
              name="vendorlocation"
              onChange={setVal}
              value={inpval.vendorlocation}
              id="vendorlocation"
            /><label>Material purchased:</label>
            <input
              type="text"
              placeholder=""
              name="purchased"
              onChange={setVal}
              value={inpval.purchased}
              id="purchased"
            /><label>Quantity:</label>
            <input
              type="text"
              placeholder=""
              name="quantity"
              onChange={setVal}
              value={inpval.quantity}
              id="quantity"
            />
            <h3>purchased service:</h3>
            <label>facility code:</label>
            <input
              type="text"
              placeholder=""
              name="code2"
              onChange={setVal}
              value={inpval.code2}
              id="code2"
            />
            <label>facility name:</label>
            <input
              type="text"
              placeholder=""
              name="name2"
              onChange={setVal}
              value={inpval.name2}
              id="name2"
            />
             <label>vendor name:</label>
            <input
              type="text"
              placeholder=""
              name="vendorname2"
              onChange={setVal}
              value={inpval.vendorname2}
              id="vendorname2"
            />
            <label>vendor Location:</label>
            <input
              type="text"
              placeholder=""
              name="vendorlocation2"
              onChange={setVal}
              value={inpval.vendorlocation2}
              id="vendorlocation2"
            /> <label>service availed:</label>
            <input
              type="text"
              placeholder=""
              name="serviceavailed"
              onChange={setVal}
              value={inpval.serviceavailed}
              id="serviceavailed"
            />
          <label>Period of service:</label>
            <input
              type="text"
              placeholder=""
              name="period2"
              onChange={setVal}
              value={inpval.period2}
              id="period2"
            />
          
             
            
  
            <div className="--my" align="center" >
            <button className='--btn-primary' onClick={addCompanydata}>Submit</button>
            {/* <p>next page<NavLink to="/dash">Go</NavLink></p> */}
            </div>
            <ToastContainer />
        </Card>  </form>
      </div></>
  
    )}

export default Scope3goods;