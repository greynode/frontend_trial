import { useEffect, useState } from 'react';
import "./Profile.css"
const api_base = 'http://localhost:3000';


function Subuserlist() {
	const [usr, setTodos] = useState([]);
	
	
	useEffect(() => {
		GetTodos();
	}, []);

	const GetTodos = () => {
		fetch(api_base + '/sublist')
			.then(res => res.json())
			.then(data => setTodos(data))
			.catch((err) => console.error("Error: ", err));
	}

	
	

	return (
		<div className="Profile">
			<h1>Your user</h1>
			

			<div className="compp">
				{usr.length > 0 ? usr.map(todo => (
					<div  >
						
                        {/* <h4>user:</h4> */}
						<div className="text">{todo.email}</div>
                       
                        

						
					</div>
				)) : (
					<p>You have no users</p>
				)}
			</div>

			
		</div>
	);
            }

export default Subuserlist;
