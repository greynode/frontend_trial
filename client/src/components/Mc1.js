
import "./CompanyForm.scss";
import Card from "./card/Card";
import React, { Component ,useState} from 'react';
import axios from 'axios';
import { NavLink,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect } from 'react';
import "./Profile.css"
 
const api_base = 'http://localhost:3000';

const Mc1 = () =>{
 
//get
const [usr, setTodos] = useState([]);
	
	
	useEffect(() => {
		GetTodos();
	}, []);

	const GetTodos = () => {
		fetch(api_base + '/mcdash')
			.then(res => res.json())
			.then(data => setTodos(data))
	
			.catch((err) => console.error("Error: ", err));
			
			
	}

  //const [type, setType] = useState(getInitialState);
  const [rail, setrail] = useState("null");
  const [road, setroad] = useState("null");
  const [water, setwater] = useState("null");
  const [nonroad, setnonroad] = useState("null");
  const [air, setair] = useState("null");



 
  
  

  const setValrail = (e) => {
    setrail(e.target.value)}
    const setValair = (e) => {
        setair(e.target.value)}
        const setValroad = (e) => {
            setroad(e.target.value)}
            const setValnonroad = (e) => {
                setnonroad(e.target.value)}
                const setValwater = (e) => {
                    setwater(e.target.value)}

 

  const addCompanydata = async (e) => {
      e.preventDefault();



         
      
//calculation





          const data = await fetch("/mc1", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                road,nonroad,rail,water,air
              })
          });

          const res = await data.json();
          console.log(res)
          
          


          if (res.status === 201) {
              toast.success(" Data saved 😃!", {
                  position: "top-center"
              });
             }else {
              toast.error("Fail!", {
                position: "top-center"
            });
              }

          
  }
  


    return(
        <>
        
        <div className="add-company-name">
        <form>
         <Card cardClass={"card"}>
          
          {/* <h3 align="center">Mobile combution</h3>
           */}
       
            <label>select type of transport:</label>
            <label>Road:</label>

             <div>
      <select value={road} onChange={setValroad}>
      <option value="null">Null</option>
        <option value="twowheeler">Two wheeler</option>
        <option value="truck">Truck</option>
        <option value="car">Car</option>
        <option value="bus">Bus</option>
        <option value="van">Van</option>
        <option value="auto">Auto</option>
        <option value="combinationvechicle">Combination vechicle</option>
        
       
      </select>
      {/* <p>{`You selected ${type}`}</p> */}
    </div>
    <label>non Road:</label>

<div>
<select value={nonroad} onChange={setValnonroad}>
<option value="null">Null</option>

<option value="Constructionequipment">Construction equipment</option>
<option value="Agriculturalequipment">Agricultural equipment</option>
<option value="Forklift">Forklift</option>
<option value="other">other</option>



</select>
{/* <p>{`You selected ${type}`}</p> */}
</div> <label>Water born:</label>

<div>
<select value={water} onChange={setValwater}>
<option value="null">Null</option>

<option value="ship">Ships</option>
<option value="boat">boat</option>



</select>
{/* <p>{`You selected ${type}`}</p> */}
</div> 
<label>Rail:</label>

<div>
<select value={rail} onChange={setValrail}>
<option value="null">Null</option>

<option value="freight">freight</option>
<option value="commute">commute</option>



</select>
{/* <p>{`You selected ${type}`}</p> */}
</div>
<label>Air:</label>

<div>
<select value={air} onChange={setValair}>
<option value="null">Null</option>

<option value="commercial">freight</option>
<option value="Executivejets">Executive jets</option>



</select>
{/* <p>{`You selected ${type}`}</p> */}
</div>
          
          
          
             
            
  
            <div className="--my" align="center" >
            <button className='--btn-primary' onClick={addCompanydata}>Submit</button>
            {/* <p>next page<NavLink to="/dash">Go</NavLink></p> */}
            </div>
            <ToastContainer />
        </Card>  </form>
      </div>
      
      <div className="Profile">
			<h2>selected</h2>
			

			<div className="compp">
				{usr.length > 0  ? usr.map(todo => (
					<div  >
						
                        <h2>road:</h2>
						<div className="text" key="{quantity}">{todo.road}</div>
						<h2>rail:</h2>
						<div className="text" key="quantity">{todo.rail}</div>
						<h2>water:</h2>
						<div className="text" key="{quantity">{todo.water}</div>
						<h2>Air:</h2>
						<div className="text" key="{quantit}">{todo.air}</div>
	                    <h2>Non road:</h2>
						<div className="text" key="{quantt}">{todo.nonroad}</div>
                        <h2>createdAt:</h2>
						<div className="text" key="{quantt}">{todo.createdAt}</div>
						
						<br></br><br></br><br></br>
	
					</div>
				)) : (
					<p>You have no data</p>
				)}
			</div>

			
		</div>
      
      </>
  
    )}

export default Mc1;