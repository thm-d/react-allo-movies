import { APIManager } from "../../APIManager";

export const REQUEST_FAVORIS = "REQUEST_FAVORIS";
export const FETCH_FAVORIS_SUCCESS = "FETCH_FAVORIS_SUCCESS";
export const FETCH_FAVORIS_ERROR = "FETCH_FAVORIS_ERROR";

export const TRY_ADD_FAVORI = "TRY_ADD_FAVORI";
export const ADD_FAVORI_SUCCESS = "ADD_FAVORI_SUCCESS";
export const ADD_FAVORI_ERROR = "ADD_FAVORI_ERROR";

export const TRY_REMOVE_FAVORI = "TRY_REMOVE_FAVORI";
export const REMOVE_FAVORI_SUCCESS = "REMOVE_FAVORI_SUCCESS";
export const REMOVE_FAVORI_ERROR = "REMOVE_FAVORI_ERROR";


export const requestFavoris = () => {
  return {
    type: REQUEST_FAVORIS
  };
};

export const fetchFavorisSuccess = (favoris) => ({
  type: FETCH_FAVORIS_SUCCESS,
  payload: favoris
});

export const fetchFavorisError = (error) => ({
  type: FETCH_FAVORIS_ERROR,
  payload: error
});

export const addFavoriSuccess = (favori) => ({
  type: ADD_FAVORI_SUCCESS,
  payload: favori
});

export const addFavoriError = (error) => ({
  type: ADD_FAVORI_ERROR,
  payload: error
});

export const tryAddFavori = movie => dispatch => {
  APIManager.saveFavori(movie)
            .then(data => {
                dispatch(addFavoriSuccess({
                  ...movie,
                  id: data.name
                }));
              })
            .catch(error => dispatch(addFavoriError(error)));
};

export const removeFavoriSuccess = (id) => ({
  type: REMOVE_FAVORI_SUCCESS,
  payload: id
});

export const removeFavoriError = (error) => ({
  type: REMOVE_FAVORI_ERROR,
  payload: error
});

export const tryRemoveFavori = id => dispatch => {
  APIManager.deleteFavori(id)
            .then(() => dispatch(removeFavoriSuccess(id)))
            .catch(error => dispatch(removeFavoriError(error)));
};
