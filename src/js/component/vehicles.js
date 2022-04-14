import React, { Component, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/vehicles.css";

export const Vehicles = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getVehicles();
  }, []);

  return (
    <div className="row">
      <h1> Vehicles title </h1>
      <div className="horizontal d-flex flex-row justify-content-start vw-100">
        {store.vehicles.map((e, i) => {
          return (
            <div key={e.uid} className="card" style={{ width: "300px" }}>
              <img
                src="https://via.placeholder.com/300x200.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">{e.name}</h6>
                <p className="card-text">
                  Info:
                  {/* {actions.getVehicleInfo(e.uid)} */}
                </p>
                <Link to={"/vehicle/" + e.uid}>
                  <button href="#" className="btn btn-primary" />
                  More Info
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
