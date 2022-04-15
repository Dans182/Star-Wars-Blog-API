import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    //actions.getCharacters();
    //actions.getPlanets();
    //actions.getVehicles()
  }, []);
  return (
  // CHARACTERS
  <div>
    <div className="text-center mt-3">
      <h1>Characters</h1>
      <div className="container">
        <div className="row scrolling-wrapper-flexbox ">
          {store.characters.map((character) => {
            return (
              <div key={character.uid} className="card p-1">
                <img
                  src={
                    "https://starwars-visualguide.com/assets/img/characters/" +
                    character.uid +
                    ".jpg"
                  }
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body p-1">
                  <h5 className="card-title">{character.properties.name}</h5>
                  <p className="card-text m-0">
                    Height: {character.properties.height}
                  </p>
                  <p className="card-text m-0">
                    Mass: {character.properties.mass}
                  </p>
                  <p className="card-text m-0">
                    Hair color: {character.properties.hair_color}
                  </p>
                  <p className="card-text m-0">
                    Skin Color: {character.properties.skin_color}
                  </p>

                  <div className="rounded mx-auto d-block">
                    <Link to={/planets/ + character.uid}>
                      <button className="btn btn-grad" onClick={() =>
                        actions.getOnePlanet(character.uid)
                      }>More info</button>
                    </Link>
                    <button
                      href="#"
                      className="btn btn2 btn-grad"
                      onClick={() =>
                        actions.updateFavorites(character.properties.name)
                      }
                    >
                      <i className="fa fa-heart" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>




    {/* PLANETAS */}
  <div>
    <div className="text-center mt-3">
      <h1>Planets</h1>
      <div className="container">
        <div className="row scrolling-wrapper-flexbox ">
          {store.planets.map((planet) => {
            return (
              <div key={planet.uid} className="card p-1">
                <img
                  src={
                    "https://starwars-visualguide.com/assets/img/planets/" +
                    planet.uid +
                    ".jpg"
                  }
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body p-1">
                  <h5 className="card-title">{planet.properties.name}</h5>
                  <p className="card-text m-0">
                    Diameter: {planet.properties.diameter}
                  </p>
                  <p className="card-text m-0">
                    Population: {planet.properties.population}
                  </p>
                  <p className="card-text m-0">
                    Climate: {planet.properties.climate}
                  </p>
                  <p className="card-text m-0">
                    Terrain: {planet.properties.terrain}
                  </p>

                  <div className="rounded mx-auto d-block">
                    <Link to={/planets/ + planet.uid}>
                      <button className="btn btn-grad" onClick={() =>
                        actions.getOnePlanet(planet.uid)
                      }>More info</button>
                    </Link>
                    <button
                      href="#"
                      className="btn btn2 btn-grad"
                      onClick={() =>
                        actions.updateFavorites(planet.properties.name)
                      }
                    >
                      <i className="fa fa-heart" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

{/* VEHICULOS */}

    <div className="text-center mt-3">
      <h1>Vehicles</h1>
      <div className="container">
        <div className="row scrolling-wrapper-flexbox ">
          {store.vehicles.map((vehicle) => {
            return (
              <div key={vehicle.uid} className="card p-1">
                <img
                  src={
                    "https://starwars-visualguide.com/assets/img/vehicles/" +
                    vehicle.uid +
                    ".jpg"
                  }
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body p-1">
                  <h5 className="card-title">{vehicle.properties.name}</h5>
                  <p className="card-text m-0">
                    Class: {vehicle.properties.vehicle_class} 
                  </p>
                  <p className="card-text m-0">
                    Crew: {vehicle.properties.crew} 
                  </p>
                  <p className="card-text m-0">
                    Passengers: {vehicle.properties.passengers} 
                  </p>
                  <p className="card-text m-0">
                    Cost: {vehicle.properties.cost_in_credits} 
                  </p>

                  <div className="rounded mx-auto d-block">
                    <Link to={/planets/ + vehicle.uid}>
                      <button className="btn btn-grad">More info</button>
                    </Link>
                    <button
                      href="#"
                      className="btn btn2 btn-grad"
                      onClick={() =>
                        actions.updateFavorites(vehicle.properties.name)
                      }
                    >
                      <i className="fa fa-heart" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
</div>
  );
};
