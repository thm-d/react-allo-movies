import React from 'react';
import style from "./index.module.scss";

export const FavoriElement = (props) => {
  const { movie, isFavori, removeFavori } = props;


  return (
    <div className={ `d-flex flex-row bg-light border ${ style.container }` }>
      <img width="185" alt="film"
           src={ movie.img }
      />
      <div className="flex-fill d-flex flex-column p-3">
        <h5>{ movie.title }</h5>
        <hr className="w-100"/>
        <p className="flex-fill">{ movie.details }</p>
        <div className="d-flex flex-row justify-content-end">
          { isFavori && (
            <button onClick={ (e) => {
              e.stopPropagation();
              removeFavori(movie);
            } }
                    className="btn btn-small btn-danger"
            >Remove</button>
          ) }
        </div>
      </div>
    </div>
  );
};