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
              Favorites
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            
            {store.favorites.map((like, i) => {
            return (
              <li key={i}>
                {like}

              </li>)})}

      
            </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};
