import { Dispatch } from 'redux'
import { ROOT_ACTIONS } from './reducers/root/types'
export type TApiError = {
  errorCode: string
  errorMessage: string
  index?: number
}
type ACTIONS = ROOT_ACTIONS

export type GetStateType = () => ACTIONS
export type DispatchType = Dispatch<ACTIONS>
