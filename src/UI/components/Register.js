import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/Login.scss';

const Register = ({ register }) => {
	return (
		<section className="login__register">
			<form onSubmit={register} autoComplete="on" >
				<img alt="logo" src={require('../../assets/channel_logo.jpg')} />
				<h6>Easy Electronics</h6>
				<input type="text" name="name" placeholder="Full Name" />
				<input type="email" name="email" placeholder="Login ID" />
				<input type="text" name="phoneNum" placeholder="Phone Number" />
				<input type="password" name="password" placeholder="Password" />
				<button type="submit" >REGISTER</button>
				<span>Already registered? <Link to="login">Login</Link></span>
			</form>
		</section>
	);
}

export default Register;