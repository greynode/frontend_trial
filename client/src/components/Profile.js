import { useEffect, useState } from 'react';
import "./Profile.css"
const api_base = 'http://localhost:3000';


function Profile() {
	const [compp, setTodos] = useState([]);
	
	
	useEffect(() => {
		GetTodos();
	}, []);

	const GetTodos = () => {
		fetch(api_base + '/comp')
			.then(res => res.json())
			.then(data => setTodos(data))
			.catch((err) => console.error("Error: ", err));
	}

	
	

	return (
		<div className="Profile">
			<h1>Your company</h1>
			

			<div className="compp">
				{compp.length > 0 ? compp.map(todo => (
					<div  >
						
                        <h4>Company name:</h4>
						<div className="text">{todo.name}</div>
                        <h4>User:</h4>
                        <div className="text">{todo.user}</div>
                        <h4>Company Contact Email:</h4>
                        <div className="text">{todo.email}</div>
                        <h4>Operating country:</h4>
                        <div className="text">{todo.country}</div>
                        <h4>Currency deals with:</h4>
                        <div className="text">{todo.currency}</div>
                        <h4>Contact:</h4>
                        <div className="text">{todo.pointofcontact}</div>
                        <h4>Services:</h4>
                        <div className="text">{todo.productservices}</div>
                        <h4>Employee id:</h4>
                        <div className="text">{todo.ids}</div>
                        <h4>Website:</h4>
                        <div className="text">{todo.website}</div>
                        <h4>Activity:</h4>
                        <div className="text">{todo.activity}</div>
                        <h4>Company address:</h4>
                        <div className="text">{todo.address}</div>
                        <h4>Description:</h4>
                        <div className="text">{todo.description}</div>
                        

						
					</div>
				)) : (
					<p>You want enter your company details</p>
				)}
			</div>

			
		</div>
	);
            }

export default Profile;
