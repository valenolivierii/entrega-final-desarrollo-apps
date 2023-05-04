import { createStore, combineReducers } from "redux";
import { charactersReducer, moviesReducer, snapshotReducer } from "./reducers";

const rootReducer = combineReducers({
  characters: charactersReducer,
  movies: moviesReducer,
  snapshot: snapshotReducer
});

export default createStore(rootReducer);
