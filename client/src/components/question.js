
import "./CompanyForm.scss";
import Card from "./card/Card";
import React, { Component ,useState} from 'react';

import axios from 'axios';
import { NavLink,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Companydetails = () =>{
  

  const [inpval, setInpval] = useState({
     
      name:"",
      user:"",
      email:"",
      currency:"",
       country:"",
     pointofcontact:"",
     productservices:"",
     ids:"",
     employee:"",
     website:"",
     activity:"",
     address:"",
     description:""
  });


  const setVal = (e) => {
      
      const {name, value } = e.target;

      setInpval(() => {
          return {
              ...inpval,
              [name]: value,
            
          }
      })
  };

  const addCompanydata = async (e) => {
      e.preventDefault();

      const { name,user,email,currency, country, pointofcontact,productservices,ids,employee,website,activity,address,description} = inpval;

         // name,user,currency, country, pointofcontact,productservices,id,employee,website,activity,address
         if (email === "") {
          toast.warning("email is required!", {
              position: "top-center"
          });}

        

          const data = await fetch("/addd", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  // fname, email, password, cpassword
                  name,user,email,currency, country, pointofcontact,productservices,ids,employee,website,activity,address,description
              })
          });

          const res = await data.json();
          console.log(res)


          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                name:"",
              user:"",
              email:"",
              currency:"",
              country:"",
             pointofcontact:"",
             productservices:"",
             ids:"",
             employee:"",
             website:"",
             activity:"",
             address:"",
            description:"" });}else {
              toast.success(" Data saved 😃!", {
                position: "top-center"
            });
              }

          // }else{
          //     // toast.error("alredy exists!", {
          //     //     position: "top-center"
          //     // });
          // }
      // }
  }


    return(
        <>
        
        <div className="add-company-name">
        <form>
         <Card cardClass={"card"}>
          
          <h3 align="center">Enter company details</h3>
          
          <label>  Email:</label>
            <input
              type="text"
              placeholder=" email"
              name="email"
              onChange={setVal}
              value={inpval.email}
              id="email"
            />
          
             <label>  Username Name:</label>
            <input
              type="text"
              placeholder=" name"
              name="user"
              onChange={setVal}
              value={inpval.user}
              id="user"
            />
            <label>  Company Name:</label>
            <input
              type="text"
              placeholder=" name"
              name="name"
              onChange={setVal}
              value={inpval.name}
              id="name"
            />
  
            <label>Operating Country:</label>
            <input
              type="text"
              placeholder="operating country"
              name="country"
              onChange={setVal}
              value={inpval.country}
              id="country"
             
           
            />
             <label>corprate address:</label>
            <input
              type="text"
              placeholder=" address"
              name="address"
              onChange={setVal}
              value={inpval.address}
              id="address"
             
           
            />
            <label>Details of bussiness activity:</label>
            <input
              type="text"
              placeholder=" activity"
              name="activity"
              onChange={setVal}
              value={inpval.activity}
              id="activity"
            
           
            />
             <label>point of contact:</label>
            <input
              type="text"
              placeholder="point of contact"
              name="pointofcontact"
              onChange={setVal}
              value={inpval.pointofcontact}
              id="pointofcontact"
            
           
            />
             <label>Currency in which you disclose financial details:</label>
            <input
              type="text"
              placeholder="currency"
              name="currency"
              onChange={setVal}
              value={inpval.currency}
              id="currency"
              
            />
            <label>Details of the products and services:</label>
            <input
              type="text"
              placeholder="products and services"
              name="productservices"
              onChange={setVal}
              value={inpval.productservices}
              id="productservices"
             
           
              
            />
            
            
  
            <label>Number of employees:</label>
            <input
              type="text"
              placeholder="Product Price"
              name="employee"
              onChange={setVal}
              value={inpval.employee}
              id="employee"
             
           
            />
  
            <label>company website:</label>
            <input
              type="text"
              placeholder="company website"
              name="website"
              onChange={setVal}
              value={inpval.website}
              id="website"
           
           
            />
            <label>Name of all facilities and their IDs :</label>
            <input
              type="text"
              placeholder="facilities and id's"
              name="ids"
              onChange={setVal}
              value={inpval.ids}
              id="ids"
              
           
            />
            <label>company Description:</label>
            <input
              type="text"
              placeholder="company description"
              name="description"
              onChange={setVal}
              value={inpval.description}
              id="description"
              
           
            />
            
  
            <div className="--my" align="center" >
            <button className='--btn-primary' onClick={addCompanydata}>Submit</button>
            <p>next page<NavLink to="/cpd">click me</NavLink></p>
            </div>
            <ToastContainer />
        </Card>  </form>
      </div></>
  
    )}

export default Companydetails;