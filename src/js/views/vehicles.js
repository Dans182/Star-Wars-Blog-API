import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/loading.css";

export const Vehicles = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getOneVehicle(params.id);
  }, []);

  return (
    <div className="text-center mt-3">
      <h1>Vehicles</h1>
      {store.oneVehicle.uid ? (
        <div className="container">
          <div className="card mx-auto " style={{ width: "30rem" }}>
            <img
              src={
                "https://starwars-visualguide.com/assets/img/vehicles/" +
                store.oneVehicle.uid +
                ".jpg"
              }
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://i.ibb.co/qjVnbF5/c06c9d63bda3f0a823aee1b2f47b0457-1.png";
              }}
              className="card-img-top"
              alt="default.404.picture"
            />

            <div className="card-body p-1">
              <h5 className="card-title">{store.oneVehicle.name}</h5>
              <p className="card-text m-0">
                Class: {store.oneVehicle.vehicle_class}
              </p>
              <p className="card-text m-0">Crew: {store.oneVehicle.crew}</p>
              <p className="card-text m-0">
                Passengers: {store.oneVehicle.passengers}
              </p>
              <p className="card-text m-0">
                Cost: {store.oneVehicle.cost_in_credits}
              </p>

              <Link to="/">
                <button className="btn btn-grad">Back home</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="loader mx-auto mt-5">
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
        </div>
      )}
    </div>
  );
};

Vehicles.propTypes = {
  match: PropTypes.number,
};
