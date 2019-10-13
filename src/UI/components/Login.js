import React from 'react';
import { Link, Redirect } from "react-router-dom";
import '../../styles/Login.scss';

const Login = ({login, isAuthenticated}) => {
	return (
		<section className="login__register">
			{ isAuthenticated ? <Redirect to="/" /> : null }
			<form onSubmit={login} autoComplete="on">
				<img alt="logo" src={require('../../assets/channel_logo.jpg')} />
				<h6>Easy Electronics</h6>
				<input type="email" name="email" placeholder="Login id"/>
				<input type="password" name="password" placeholder="Password"/>
				<button type="submit">LOGIN</button>
				<span>Not registered? <Link to="/register">Create an account</Link></span>
			</form>
		</section>
	);
}

export default Login;