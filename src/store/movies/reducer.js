import {
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_SUCCESS,
  REQUEST_MOVIES,
  SET_SELECTED_MOVIE
} from "./actions";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  selectedMovie: 0
}

export const moviesReducer = (state, action) => {
  if (!state) return initialState
  switch (action.type) {
    case REQUEST_MOVIES:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        data: [...action.payload],
        isLoading: false,
        selectedMovie: 0
      }
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case SET_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload
      }
    default:
      return state
  }
}