import {
  ADD_FAVORI_ERROR,
  ADD_FAVORI_SUCCESS,
  FETCH_FAVORIS_ERROR,
  FETCH_FAVORIS_SUCCESS,
  REMOVE_FAVORI_ERROR, REMOVE_FAVORI_SUCCESS, REQUEST_FAVORIS
} from "./actions";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const favorisReducer = (state, action) => {
  if (!state) return initialState;
  switch (action.type) {
    case REQUEST_FAVORIS:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_FAVORIS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null
      };
    case FETCH_FAVORIS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case ADD_FAVORI_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoading: false,
        error: null
      };
    case REMOVE_FAVORI_SUCCESS:
      return {
        ...state,
        data: state.data.filter(f => f.id !== action.payload),
        isLoading: false,
        error: null
      };
    case ADD_FAVORI_ERROR:
    case REMOVE_FAVORI_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};