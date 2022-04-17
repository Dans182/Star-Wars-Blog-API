import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getOneCharacter(params.id);
  }, []);

  return (
    <div className="text-center mt-3">
      <h1>Characters</h1>
      {store.oneCharacter.uid ? (
        <div className="container">
          <div className="card mx-auto " style={{ width: "30rem" }}>
            <img
              src={
                "https://starwars-visualguide.com/assets/img/characters/" +
                store.oneCharacter.uid +
                ".jpg"
              }
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://i.ibb.co/qjVnbF5/c06c9d63bda3f0a823aee1b2f47b0457-1.png";
              }}
              className="card-img-top"
              alt="..."
            />

            <div className="card-body p-1">
              <h5 className="card-title">{store.oneCharacter.name}</h5>
              <p className="card-text m-0">
                Height: {store.oneCharacter.height}
              </p>
              <p className="card-text m-0">
              Mass: {store.oneCharacter.mass}
              </p>
              <p className="card-text m-0">
              Hair color: {store.oneCharacter.hair_color}
              </p>
              <p className="card-text m-0">
              Skin Color: {store.oneCharacter.skin_color}
              </p>

              <Link to="/">
                <button className="btn btn-grad">Back home</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

Characters.propTypes = {
  match: PropTypes.number,
};
