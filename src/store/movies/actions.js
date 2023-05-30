import { APIManager } from "../../APIManager";
import { fetchFavorisError, fetchFavorisSuccess, requestFavoris } from "../favoris/actions";

export const REQUEST_MOVIES = "REQUEST_MOVIES";
export const FETCH_SEARCH_MOVIES = "FETCH_SEARCH_MOVIES";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";
export const SET_SELECTED_MOVIE = "SET_SELECTED_MOVIE";


export const requestMovies = () => {
  return {
    type: REQUEST_MOVIES
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies
  };
};

export const fetchMoviesError = (error) => ({
  type: FETCH_MOVIES_ERROR,
  payload: error
});

export const fetchSearchMovies = (filter) => dispatch => {
  dispatch(requestMovies());
  APIManager.fetchSearchDataApi(filter)
            .then(data => dispatch(fetchMoviesSuccess(data)))
            .catch(error => dispatch(fetchMoviesError(error)));
};

export const fetchMovies = () => dispatch => {
  dispatch(requestMovies());
  dispatch(requestFavoris());
  APIManager.fetchDataApi()
            .then(data => {
                dispatch(fetchMoviesSuccess(data.movies));
                dispatch(fetchFavorisSuccess(data.favoris));
              })
            .catch(error => {
                dispatch(fetchMoviesError(error));
                dispatch(fetchFavorisError(error));
              });
};

export const setSelectedMovie = index => ({
  type: SET_SELECTED_MOVIE,
  payload: index
});
