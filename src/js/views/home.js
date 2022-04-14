import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
// import rigoImage from "../../img/planetsimg/2.webp";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    // actions.getPlanets();

    // actions.getPlanetsImg();
  }, []);

  {
    store.planets.map((planetImg, j) => {
      return (
        <div key={j}>
          <img src="" className="card-img-top" alt="..." />
        </div>
      );
    });
  }

  return (
    <div className="text-center mt-5">
      <h1>Planets</h1>
      <div className="container">

        <div className="row scrolling-wrapper-flexbox ">
          {store.planets.map( (planet, i) => {
 
            return (
              <div key={i} className="card">
                <img src={"https://starwars-visualguide.com/assets/img/planets/" + planet.uid + ".jpg"}
                 className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{planet.properties.name}</h5>
                  
				  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
				  <Link to="/single/:theid"> 
                  <button className="btn btn-grad">
                    More info
                  </button>
				  </Link>
				  <button href="#" className="btn btn2 btn-grad">
				  <i className="fa fa-heart" />
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
