import { useEffect, useState } from 'react';
import "./Profile.css"
 
const api_base = 'http://localhost:3000';


function Mobilefreightdash() {
	const [usr, setTodos] = useState([]);
	
	
	useEffect(() => {
		GetTodos();
	}, []);

	const GetTodos = () => {
		fetch(api_base + '/mcomppfreight')
			.then(res => res.json())
			.then(data => setTodos(data))
	
			.catch((err) => console.error("Error: ", err));
			
			
	}

	return (
		<div className="Profile">
			<h2>Emmision</h2>
			

			<div className="compp">
				{usr.length > 0  ? usr.map(todo => (
					<div  >
						
                        <h2>Distance:</h2>
						<div className="text" key="{quantity}">{todo.distance}</div>
						<h2>mode of transport:</h2>
						<div className="text" key="quantity">{todo.fuel}</div>
						<h2>facility name:</h2>
						<div className="text" key="{quantity">{todo.facility}</div>
						<h2>facility code:</h2>
						<div className="text" key="{quantit}">{todo.code}</div>
	                    <h2>Co2:</h2>
						<div className="text" key="{quantt}">{todo.co2}</div>
						<h2>category:</h2>   
						<div className="text" key="{quant}">{todo.category}</div>
						<h2>weight:</h2>
						<div className="text" key="{quait}">{todo.weight}</div>
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

export default Mobilefreightdash;
