import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getPlanetsInfo(params.theid);
	  }, []);

	return (
	<div className="card"  style={{ width: "30rem" }} >
      <img src="https://via.placeholder.com/300x200.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{store.vehicleInfo.name}</h5>
        <p className="card-text">
		<div>
			{Object.entries(store.planetsInfo).map((e,i)=>{
				return(
					<div id={i}>
					<strong>{e[0]}:</strong> {e[1]};
					</div>
				)
			})}
		</div>
        </p>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
		</div>
  );
};

Planets.propTypes = {
	match: PropTypes.number
};
