import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starwars-logo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);



  return (
    /*LOGO*/

    <nav className="navbar navbar-light bg-light mb-2 justify-content-around">
      <Link to="/">
        <div className="navbar-brand">
          <img src={starWarsLogo} style={{ height: "4rem" }}></img>
        </div>
      </Link>

      <div className="ml-auto">
        <Link to="/">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites {store.favorites.length}
		
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            
            {store.favorites.map((like, i) => {
            let character = store.characters.find(character => character.properties.name == like);
            let planet = store.planets.find(planet => planet.properties.name == like);
            let vehicle = store.vehicles.find(vehicle => vehicle.properties.name == like);
            let id = 0;
            let type = "";
            if (character) {
              id = character.uid
              type = "/characters/"
            }else if (planet) {
              id = planet.uid
              type = "/planets/"
            } else if (vehicle) {
              id = vehicle.uid
              type = "/vehicles/"
            }

            return (

              <li key={i}>
              <Link to={type + id}>{like}</Link> 
              </li>)})}
            </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};
