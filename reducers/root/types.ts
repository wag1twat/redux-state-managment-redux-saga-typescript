/* INITIAL STATE */
export type TRootReducer = {
  launch: boolean
  launchDate: Date | null
}
/* ACTIONS */
/* ACTIONS / STRING TYPES */
export const ___INITIALIZE_ROOT__ = '___INITIALIZE_ROOT__'
export const LAUNCH = 'LAUNCH'
export const SET_LAUNCH_DATE = 'SET_LAUNCH_DATE'
/* ACTIONS TYPES */
export type LAUNCH_ACTION = {
  type: typeof LAUNCH
}
export type SET_LAUNCH_DATE_ACTION = {
  type: typeof SET_LAUNCH_DATE
  payload: Date
}
export type __INITIALIZE_ROOT__ACTION = {
  type: typeof ___INITIALIZE_ROOT__
}
/* === */
export type ROOT_ACTIONS =
  | LAUNCH_ACTION
  | SET_LAUNCH_DATE_ACTION
  | __INITIALIZE_ROOT__ACTION
