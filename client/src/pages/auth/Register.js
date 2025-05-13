import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { toast } from 'react-toastify';

const Register = () => {
	const [name,  setName] = useState("");
	const [email,  setEmail] = useState("");
	const [password,  setPassword] = useState("");
	const [phone,  setPhone] = useState("");
	const [address,  setAddress] = useState("");

	//FORM FUNCTION
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, email, password, phone, address + "values");
		toast.success("Register Successfully!")
	}


	return (
		<Layout>
			<div className="register">
				<form  onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="userName" className="form-label">Full Name</label>
						<input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="userName" placeholder="Enter Your Full Name" required/>
					</div>

					<div className="mb-3">
						<label htmlFor="userEmail" className="form-label">Email</label>
						<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter Your Email" required/>
					</div>

					<div className="mb-3">
						<label htmlFor="password" className="form-label">Password</label>
						<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="Enter Your Password" required/>
					</div>

					<div className="mb-3">
						<label htmlFor="phone" className="form-label">Phone</label>
						<input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="phone" placeholder="Enter Your Phone" required/>
					</div>

					<div className="mb-3">
						<label htmlFor="address" className="form-label">Address</label>
						<input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="address" placeholder="Enter Your Address" required/>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		</Layout>
	)
}

export default Register