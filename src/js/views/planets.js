import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getOnePlanet(params.theid);
  }, []);

  return (
    <div className="text-center mt-3">
      <h1>Planets</h1>
      <div className="container">
        <div className="card mx-auto " style={{ width: "30rem" }}>
          <img
            src={
              "https://starwars-visualguide.com/assets/img/planets/" +
              store.onePlanet.uid +
              ".jpg"
            }
            className="card-img-top"
            alt="..."
          />

          <div className="card-body p-1">
            <h5 className="card-title">{store.onePlanet.name}</h5>
            <p className="card-text m-0">
              Diameter: {store.onePlanet.diameter}
            </p>
            <p className="card-text m-0">
              Population: {store.onePlanet.population}
            </p>
            <p className="card-text m-0">Climate: {store.onePlanet.climate}</p>
            <p className="card-text m-0">Terrain: {store.onePlanet.terrain}</p>

            <Link to="/">
            <button className="btn btn-grad">
                Back home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Planets.propTypes = {
  match: PropTypes.number,
};
