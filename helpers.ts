import { TApiError } from './types'
import { requestErrorNotification } from './reducers/norifications/actions/actions'
import { all, put } from 'redux-saga/effects'
/* TYPES */
export const isArrays = (...rest: any[]) =>
  rest && Array.isArray(rest) && rest.every((r) => Array.isArray(r))
    ? true
    : false
export const isFunctions = (...rest: any[]) =>
  rest && isArrays(rest) && rest.every((r) => typeof r === 'function')
    ? true
    : false
export const isNotNaNs = (...rest: any[]) =>
  isArrays(rest) && rest.every((r) => !isNaN(r)) ? true : false
/* VALIDATES */

export function* checkError(err: any) {
  let response: TApiError[] = yield err.response?.data?.errorMessages
  response = isArrays(response)
    ? response.map((r, index) => ({ ...r, index }))
    : []
  yield all(response.map((r) => put(requestErrorNotification(r.errorMessage))))
}
/* === */
/* LOGGER */
export const Logger = (type: 'warn' | 'error' | 'log', log: string) => {
  switch (type) {
    case 'log':
      return console.log(log)
    case 'warn':
      return console.warn(log)
    case 'error':
      return console.error(log)
    default:
      return console.log(log)
  }
}
/* === */
