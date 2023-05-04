import { movies } from "../../constants/data";
import { movieTypes } from "../types";
const { SELECT_MOVIES, SELECT_MOVIE } = movieTypes;

const initialState = {
  movies: movies,
  filtered: [],
  selected: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MOVIES:
      const filteredMovies = movies.filter(
        (movie) => movie.saga == action.saga
      );
      return {
        ...state,
        filtered: filteredMovies,
      };
    case SELECT_MOVIE:
      const selectedMovie = movies.find((movie) => movie.title == action.title);
      return {
        ...state,
        selected: selectedMovie,
      };
    default:
      return state;
  }
};

export default moviesReducer;
