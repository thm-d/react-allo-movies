import React from 'react';
import { useSelector } from "react-redux";
import { Loading } from "../../../../components/utils/Loading";
import { moviesSelectedMovieSelector } from "../../../../store/movies/selectors";
import style from "./index.module.scss"


export const MovieDetails = () => {
  const selectedMovie = useSelector(moviesSelectedMovieSelector);


  return (
    <>
      {
        selectedMovie ? (
          <div className={ `w-25 border p-4 mb-2 d-flex flex-column ${style.container}` }>
            <h5>{selectedMovie.title}</h5>
            <hr className="w-100" />
            <div>
              <img className="d-block mx-auto w-100" src={selectedMovie.img} alt="film visual" />
            </div>
            <hr className="w-100" />
            <span className="text-secondary">{selectedMovie.details}</span>
            <span>{selectedMovie.description}</span>
          </div>
        ) : (
          <Loading />
        )
      }
    </>

  );
};