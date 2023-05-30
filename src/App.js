import React, { useEffect, Suspense } from 'react';
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchSearchMovies, setSelectedMovie } from "./store/movies/actions";
import { tryAddFavori, tryRemoveFavori } from "./store/favoris/actions";
import { Loading } from "./components/utils/Loading";
import { favorisListSelector } from "./store/favoris/selectors";
import { moviesListSelector } from "./store/movies/selectors";


export const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector(moviesListSelector);
  const favoris = useSelector(favorisListSelector);


  useEffect(() => {
    dispatch(fetchMovies())
  }, []);

  const addFavori = (favori) => {
    dispatch(tryAddFavori(favori));
  };

  const removeFavori = (favori) => {
    const target = favoris.find(f => f.title === favori.title);
    dispatch(tryRemoveFavori(target.id));
  };

  const updateSelectedMovie = (index) => {
    dispatch(setSelectedMovie(index));
  };

  const searchMovies = (filter) => {
    dispatch(fetchSearchMovies(filter));
  };


  return (
    <div className="App d-flex flex-column">
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet context={{
          movies,
          favoris,
          removeFavori,
          addFavori,
          updateSelectedMovie,
          searchMovies
        }} />
      </Suspense>
    </div>
  );
};
