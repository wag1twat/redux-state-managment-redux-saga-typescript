import { TApiError } from '../../types'

/* INITIAL STATE */
export type TUserReducer = {
  error: TApiError[] | null
  authorize: boolean
  loading: boolean
}
/* ACTIONS / STRING TYPES */
export const __INITIALIZE_USER__ = '__INITIALIZE_USER__'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_REFRESH = 'LOGIN_REFRESH'
/* ACTIONS TYPES */
export type LOGIN_REQUEST_ACTION = {
  type: typeof LOGIN_REQUEST
  username: string
  password: string
}
export type LOGIN_SUCCESS_ACTION = {
  type: typeof LOGIN_SUCCESS
  authorize: boolean
  error: boolean
  loading: boolean
}
export type LOGIN_ERROR_ACTION = {
  type: typeof LOGIN_ERROR
  authorize: boolean
  error: boolean
  loading: boolean
}
export type LOGIN_REFRESH_ACTION = {
  type: typeof LOGIN_REFRESH
}
export type __INITIALIZE_USER__ACTION = {
  type: typeof __INITIALIZE_USER__
}
type LOGIN_ACTIONS =
  | LOGIN_SUCCESS_ACTION
  | LOGIN_ERROR_ACTION
  | LOGIN_REQUEST_ACTION
  | LOGIN_REFRESH_ACTION
  | __INITIALIZE_USER__ACTION

export type USER_REDUCER_ACTIONS = LOGIN_ACTIONS
