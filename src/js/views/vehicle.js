import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Vehicle = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const vehicle = store.vehicles.find((e)=>{
    return e.uid==params.theid;
 })
  console.log(vehicle);

  return (
    <div className="card mx-auto"  style={{ width: "30rem" }} >
      <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+vehicle.uid+".jpg"} className="card-img-top" alt={vehicle.properties.name} />
      <div className="card-body">
        <h5 className="card-title">{vehicle.properties.name}</h5>
        <p className="card-text">
		<div>
			{Object.entries(vehicle.properties).map((e,i)=>{
				return(
					<div id={i}>
					<strong>{e[0]}:</strong> {e[1]};
					</div>
				)
			})}
		</div>
        </p>
        <Link to="/">
          <span className="btn btn-dark btn-lg mt-3" href="#" role="button">
            Back home
          </span>
        </Link>
      </div>
    </div>
  );
};

Vehicle.propTypes = {
  theid: PropTypes.number,
};
