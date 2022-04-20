import React, { useState, useContext, useEffect } from "react";
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
              let changeColor = "";
              if (store.favorites.includes(character.properties.name)) {
                changeColor = "text-danger";
              }
              return (
                <div key={character.uid} className="card p-1">
                  <img
                    src={
                      "https://starwars-visualguide.com/assets/img/characters/" +
                      character.uid +
                      ".jpg"
                    }
                    className="card-img-top"
                    alt="character.picture"
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

                    <div className="rounded">
                      <Link to={/characters/ + character.uid}>
                        <button
                          className="btn btn-grad "
                          onClick={() => actions.getOneCharacter(character.uid)}
                        >
                          More info
                        </button>
                      </Link>
                      <button
                        className="btn btn2 btn-grad"
                        onClick={() =>
                          actions.updateFavorites(character.properties.name)
                        }
                      >
                        <i className={"fa fa-heart " + changeColor} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="card" style={{ width: "250px" }}>
              <div className="card-body d-flex align-items-middle">
                {store.nextCharacters != null ? (
                  <button
                    href="#"
                    className="btn btn-dark"
                    onClick={() => actions.getCharacters()}
                  >
                    More Characters
                  </button>
                ) : null}
              </div>
            </div>
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
                let changeColor = "";
                if (store.favorites.includes(planet.properties.name)) {
                  changeColor = "text-danger";
                }
                return (
                  <div key={planet.uid} className="card p-1 ">
                    <img
                      src={
                        "https://starwars-visualguide.com/assets/img/planets/" +
                        planet.uid +
                        ".jpg"
                      }
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src =
                          "https://i.ibb.co/qjVnbF5/c06c9d63bda3f0a823aee1b2f47b0457-1.png";
                      }}
                      className="card-img-top"
                      alt="planet.picture"
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

                      <Link to={/planets/ + planet.uid}>
                        <button className="btn btn-grad">More info</button>
                      </Link>
                      <button
                        href="#"
                        className="btn btn2 btn-grad"
                        onClick={() =>
                          actions.updateFavorites(planet.properties.name)
                        }
                      >
                        <i className={"fa fa-heart " + changeColor} />
                      </button>
                    </div>
                  </div>
                );
              })}
              <div className="card" style={{ width: "250px" }}>
                <div className="card-body d-flex align-items-middle">
                  {store.nextPlanets != null ? (
                    <button
                      href="#"
                      className="btn btn-dark"
                      onClick={() => actions.getPlanets()}
                    >
                      More Planets
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VEHICULOS */}

        <div className="text-center mt-3">
          <h1>Vehicles</h1>
          <div className="container">
            <div className="row scrolling-wrapper-flexbox ">
              {store.vehicles.map((vehicle) => {
                let changeColor = "";
                if (store.favorites.includes(vehicle.properties.name)) {
                  changeColor = "text-danger";
                }
                return (
                  <div key={vehicle.uid} className="card p-1">
                    <img
                      src={
                        "https://starwars-visualguide.com/assets/img/vehicles/" +
                        vehicle.uid +
                        ".jpg"
                      }
                      className="card-img-top"
                      alt="vehicle.picture"
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
                        <Link to={/vehicles/ + vehicle.uid}>
                          <button className="btn btn-grad">More info</button>
                        </Link>
                        <button
                          href="#"
                          className="btn btn2 btn-grad"
                          onClick={() =>
                            actions.updateFavorites(vehicle.properties.name)
                          }
                        >
                          <i className={"fa fa-heart " + changeColor} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="card" style={{ width: "250px" }}>
                <div className="card-body d-flex align-items-middle ">
                  {store.nextVehicles != null ? (
                    <button
                      href="#"
                      className="btn btn-dark"
                      onClick={() => actions.getVehicles()}
                    >
                      More Vehicles
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
