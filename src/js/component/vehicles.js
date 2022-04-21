import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/vehicles.css";

export const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const [sendRequest, setSendRequest] = useState(false);

  useEffect(() => {
    actions.getLocalVehicles();
  }, []);

  useEffect(() => {
    if (sendRequest) {
      setSendRequest(false);
    }
  }, [sendRequest]);

  return (
    <div className="container">
      <h1> Vehicles {store.vehicles.length} </h1>
     <div className="row d-flex flex-nowrap overflow-auto">
        {store.vehicles.map((e, i) => {
          return (
            <div key={e.uid} className="card" style={{ width: "250px" }}>
              <img
                src={"https://starwars-visualguide.com/assets/img/vehicles/"+e.uid+".jpg"}
                className="card-img-top mt-2"
                alt={e.properties.name}
                width="200"
              />
              <div className="card-body">
                <h6 className="card-title">{e.properties.name}</h6>
                <p className="card-text">
                  ({e.uid})<br/>
                  Model: {e.properties.model}<br/>
                  Vehicle class: {e.properties.vehicle_class}<br/>
                  Manufacturer: {e.properties.manufacturer}<br/>
                </p>
                <Link to={"/vehicle/" + e.uid}>
                  <button href="#" className="btn btn-light">
                  +
                  </button>
                </Link>
                <button href="#" className="btn btn2 btn-grad" onClick={()=>{
                  actions.updateFavourites(e.uid);
                  }}>
                  <i className="fa fa-heart" />
                </button>
              </div>
            </div>
          );
        })}
        <div className="card" style={{ width: "250px" }}>
          <div className="card-body">
            <h6 className="card-title"></h6>
            <p className="card-text"></p>
            <button
              href="#"
              className="btn btn-dark"
              onClick={() => {
                actions.getVehicles();
                setSendRequest(true);
              }}
            >
              More Vehicles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
