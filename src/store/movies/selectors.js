import { createSelector } from 'reselect';

export const moviesSelector = state => state.Movies;

/**
 * When using 'createSelector',
 * ... the function will use a cache system to keep in memory
 * ... the result of the execution of the function for given parameters
 */
export const moviesListSelector = createSelector(
  [moviesSelector],
  movies => movies.data
)

export const moviesSelectedMovieIndexSelector = createSelector(
  [moviesSelector],
  movies => movies.selectedMovie
)

export const moviesSelectedMovieSelector = createSelector(
  [moviesListSelector, moviesSelectedMovieIndexSelector],
  (moviesData, index) => moviesData[index]
)

