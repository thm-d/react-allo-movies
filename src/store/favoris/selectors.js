import { createSelector } from 'reselect';

export const favorisSelector = state => state.Favoris;

/**
 * When using 'createSelector',
 * ... the function will use a cache system to keep in memory
 * ... the result of the execution of the function for given parameters
 */
export const favorisListSelector = createSelector(
  [favorisSelector],
  (favoris) => favoris.data
);
