import { useEffect, useState } from 'react';
import "./Profile.css"
 
const api_base = 'http://localhost:3000';


function Scope3dash() {
	const [usr, setTodos] = useState([]);
	
	
	useEffect(() => {
		GetTodos();
	}, []);

	const GetTodos = () => {
		fetch(api_base + '/scope3dash')
			.then(res => res.json())
			.then(data => setTodos(data))
	
			.catch((err) => console.error("Error: ", err));
			
			
	}
	
	return (
		<div className="Profile">
			<h1>Details</h1>
			
            
			<div className="compp">
				{usr.length > 0  ? usr.map(todo => (
					<div  >
						
                        <h2>name:</h2>
						<div className="text" key="{quantity}">{todo.name}</div>
						<h2>product:</h2>
						<div className="text" key="quantity">{todo.product}</div>
						<h2>franchisename:</h2>
						<div className="text" key="{quantity">{todo.franchisename}</div>
						<h2>franchiseperiod:</h2>
						<div className="text" key="{quantit}">{todo.franchiseperiod}</div>
	                    <h2>investment:</h2>
						<div className="text" key="{quantt}">{todo.investment}</div>
						<h2>location:</h2>
						<div className="text" key="{qait}">{todo.location}</div>
                        <h2>period:</h2>
						<div className="text" key="{qait}">{todo.period}</div>
                        <h2>asset:</h2>
						<div className="text" key="{qait}">{todo.asset}</div>
                        <h2>disposal:</h2>
						<div className="text" key="{qait}">{todo.disposal}</div>
                        <h2>time:</h2>
						<div className="text" key="{qait}">{todo.time}</div>

						<br></br><br></br><br></br>
	
					</div>
				)) : (
					<p>You have no data</p>
				)}
			</div>

			
		</div>
	);
            }

export default Scope3dash;
