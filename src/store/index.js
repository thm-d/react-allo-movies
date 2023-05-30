import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import thunk from "redux-thunk";
import { moviesReducer } from "./movies/reducer";
import { favorisReducer } from "./favoris/reducer";


const middleware = [thunk];

const rootReducer = combineReducers({
  Movies: moviesReducer,
  Favoris: favorisReducer
});

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware)
));

