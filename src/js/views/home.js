import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPlanets();
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>Planets</h1>
	  <div className="container">
        <div className="row scrolling-wrapper-flexbox ">
          {store.planets.map((planet, i) => {
            return (
              <div key={i} className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{planet.name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button href="#" className="btn btn-grad">
                    More info
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
	  </div>
  );
};
