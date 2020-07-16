import { createSelector } from 'reselect'
import { TRootState } from '../index'
//get no-mutable data
export function selector<T>(fn: (state: TRootState) => T) {
  return createSelector(fn, (data) => data)
}
