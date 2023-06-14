import React from 'react';
import { SearchBar } from "./components/SearchBar";
import { MovieList } from "./components/MovieList";
import { MovieDetails } from "./components/MovieDetails";
import { useOutletContext } from "react-router-dom";


const Films = () => {
  const { movies, favoris, removeFavori, addFavori, searchMovies, updateSelectedMovie } = useOutletContext();


  return (
    <>
      <SearchBar searchMovies={ searchMovies }/>
      <div className="d-flex flex-row flex-fill pt-4 p-2">
        <MovieList movies={ movies }
                   updateSelectedMovie={ updateSelectedMovie }
                   favoris={ favoris.map(f => f.details ) }
                   removeFavori={ removeFavori }
                   addFavori={ addFavori }
        />
        <MovieDetails/>
      </div>
    </>
  );
};

export default Films;