import { movieTypes } from "../types";

const { SELECT_MOVIES, SELECT_MOVIE } = movieTypes;

export const selectMovies = (saga) => ({
  type: SELECT_MOVIES,
  saga: saga,
});

export const selectMovie = (title) => ({
  type: SELECT_MOVIE,
  title: title,
});