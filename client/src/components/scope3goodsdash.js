import { useEffect, useState } from 'react';
import "./Profile.css"
 
const api_base = 'http://localhost:3000';


function Scope3goodsdash() {
	const [usr, setTodos] = useState([]);
	
	
	useEffect(() => {
		GetTodos();
	}, []);

	const GetTodos = () => {
		fetch(api_base + '/scope3goodsdash')
			.then(res => res.json())
			.then(data => setTodos(data))
	
			.catch((err) => console.error("Error: ", err));
			
			
	}
	
	return (
		<div className="Profile">
			
			

			<div className="compp">
				{usr.length > 0  ? usr.map(todo => (
					<div  >
						<h2 >purchased goods:</h2>
                        <h2>facility code:</h2>
						<div className="text" key="{quantity}">{todo.codegoods}</div>
						<h2>facility name:</h2>
						<div className="text" key="quantity">{todo.namegoods}</div>
						<h2>vendor name:</h2>
						<div className="text" key="{quantity">{todo.vendorname}</div>
						<h2>vendor location:</h2>
						<div className="text" key="{quantit}">{todo.vendorlocation}</div>
	                    <h2>Material purchased:</h2>
						<div className="text" key="{quantt}">{todo.purchased}</div>
                        <h2>Quantity:</h2>
						<div className="text" key="{quantt}">{todo.quantity}</div>
                        <h2>purchased service:</h2>
                        
                        <h2>facility code:</h2>
						<div className="text" key="{quantity}">{todo.code2}</div>
						<h2>facility name:</h2>
						<div className="text" key="quantity">{todo.name2}</div>
						<h2>vendor name:</h2>
						<div className="text" key="{quantity">{todo.vendorname2}</div>
						<h2>vendor location:</h2>
						<div className="text" key="{quantit}">{todo.vendorlocation2}</div>
                        <h2>Service availed:</h2>
						<div className="text" key="{quantity">{todo.serviceavailed}</div>
						<h2>period of service:</h2>
						<div className="text" key="{quantit}">{todo.period2}</div>
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

export default Scope3goodsdash;
