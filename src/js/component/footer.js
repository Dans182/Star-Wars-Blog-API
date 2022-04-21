import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made with <i className="fa fa-heart text-danger" onClick={()=>{
				localStorage.removeItem("next");
				localStorage.removeItem("vehicles");
			}
				} /> by <i className="fa-brands fa-galactic-republic"></i>
		</p>
	</footer>
);
