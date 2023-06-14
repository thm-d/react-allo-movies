import React from 'react';
import { MovieElement } from "./MovieElement";
import style from "./index.module.scss";


export const MovieList = (props) => {
  const { movies, updateSelectedMovie, favoris, addFavori, removeFavori } = props;

  return (
    <div className={ `w-75 d-flex flex-row flex-wrap justify-content-center ${ style.container }` }>
      { movies?.map((m, i) => (
        <MovieElement key={ Math.random() }
                      movie={ m }
                      updateSelectedMovie={ () => updateSelectedMovie(i) }
                      isFavori={ favoris.includes(m.details) }
                      addFavori={ addFavori }
                      removeFavori={ removeFavori }
        />
      )) }
    </div>
  );
};