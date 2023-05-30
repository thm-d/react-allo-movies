import React from 'react';
import style from "./index.module.scss";

export const MovieElement = (props) => {
  const { movie, updateSelectedMovie, isFavori, removeFavori, addFavori } = props;


  return (
    <div className={`border d-flex ${style.container}`} onClick={updateSelectedMovie}>
      <img width="185" alt="film visual"
           src={movie.img} />
      <div className="flex-fill d-flex flex-column p-3">
        <h5>{movie.title}</h5>
        <hr className="w-100" />
        <p className="flex-fill">{movie.details}</p>
        <div className="d-flex flex-row justify-content-end">
          {isFavori ? (
            <button onClick={(e) => {
              e.stopPropagation();
              removeFavori(movie);
            }}
                    className="btn btn-small btn-danger">Remove</button>
          ) : (
            <button onClick={(e) => {
              e.stopPropagation();
              addFavori(movie);
            }}
                    className="btn btn-small btn-primary">Add</button>
          )}
        </div>
      </div>
    </div>
  );
};