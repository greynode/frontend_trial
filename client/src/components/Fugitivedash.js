import { useEffect, useState } from 'react';
import "./Profile.css"
 
const api_base = 'http://localhost:3000';


function Fugitivedash() {
	const [usr, setTodos] = useState([]);
	
	
	useEffect(() => {
		GetTodos();
	}, []);

	const GetTodos = () => {
		fetch(api_base + '/fugdash')
			.then(res => res.json())
			.then(data => setTodos(data))
	
			.catch((err) => console.error("Error: ", err));
			
			
	}

	return (
		<div className="Profile">
			<h3>Emmision</h3>
			

			<div className="compp">
				{usr.length > 0  ? usr.map(todo => (
					<div  >
						
                        <h2>type of refrigerant:</h2>
						<div className="text" key="{quantity}">{todo.refrigerant}</div>
						<h2>type of refrigeration:</h2>
						<div className="text" key="quantity">{todo.refrigeration}</div>
						<h2>facility name:</h2>
						<div className="text" key="{quantity">{todo.facility}</div>
						<h2>facility code:</h2>
						<div className="text" key="{quantit}">{todo.code}</div>
	                    <h2>Co2:</h2>
						<div className="text" key="{quantt}">{todo.co2}</div>
						<h2>Amount of refrigerant used to charge new equipment::</h2>   
						<div className="text" key="{quant}">{todo.f}</div>
						<h2>Total refrigerant capacity of the equipment:</h2>
						<div className="text" key="{quait}">{todo.g}</div>
                        <h2>Amount of refrigerant bought to service the equipment:</h2>
						<div className="text" key="{quantt}">{todo.h}</div>
                        <h2>Total refrigerant capacity of retiring equipment:</h2>
						<div className="text" key="{quantt}">{todo.i}</div>
                        <h2>Refrigerant recovered from the retiring equipment:</h2>
						<div className="text" key="{quantt}">{todo.j}</div>
						<h2>Created At:</h2>
						<div className="text" key="{qait}">{todo.createdAt}</div>
						<br></br><br></br><br></br>
	
					</div>
				)) : (
					<p>You have no data</p>
				)}
			</div>

			
		</div>
	);
            }

export default Fugitivedash;
