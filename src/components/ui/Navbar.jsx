import React from 'react';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
			<div className="container-fluid">
				<span className="navbar-brand">Enrique</span>
				<button className="btn btn-outline-danger">
					<i className="fas fa-sign-out-alt"></i>
					<span> Salir</span>
				</button>
			</div>
		</nav>
	);
};
