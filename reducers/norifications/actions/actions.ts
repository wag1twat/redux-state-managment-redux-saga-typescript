import {
  REQUEST_SUCCESS_NOTIFICATION_ACTION,
  REQUEST_SUCCESS_NOTIFICATION,
  HIDE_SUCCESS_NOTIFICATION,
  HIDE_SUCCESS_NOTIFICATION_ACTION,
  REQUEST_ERROR_NOTIFICATION_ACTION,
  HIDE_ERROR_NOTIFICATION_ACTION,
  REQUEST_ERROR_NOTIFICATION,
  HIDE_ERROR_NOTIFICATION,
} from '../types'
import { TApiError } from '../../../types'
import { isArrays } from '../../../helpers'
/* success */
export type TRequestSuccessNotification = {
  (payload: string): REQUEST_SUCCESS_NOTIFICATION_ACTION
}
export type THideSuccessNotification = {
  (index: number): HIDE_SUCCESS_NOTIFICATION_ACTION
}
export const requestSuccessNotification: TRequestSuccessNotification = (
  payload
) => ({
  type: REQUEST_SUCCESS_NOTIFICATION,
  payload,
})
export const hideSuccessNotification: THideSuccessNotification = (index) => ({
  type: HIDE_SUCCESS_NOTIFICATION,
  index,
})
/* errors */
export type TRequestErrorNotification = {
  (payload: string): REQUEST_ERROR_NOTIFICATION_ACTION
}
export type THideErrorNotification = {
  (index: number): HIDE_ERROR_NOTIFICATION_ACTION
}
export const requestErrorNotification: TRequestErrorNotification = (
  payload
) => {
  return {
    type: REQUEST_ERROR_NOTIFICATION,
    payload,
  }
}
export const hideErrorNotification: THideErrorNotification = (index) => ({
  type: HIDE_ERROR_NOTIFICATION,
  index,
})
