import { TApiError } from '../../types'
import { TPopularGood } from './typesData'

/* INITIAL STATE */
export type TGoodsReducer = {
  loading: boolean
  error: TApiError[]
  popular: TPopularGood[]
}
/* ACTIONS */
/* ACTIONS / STRING TYPES */
export const ___INITIALIZE_GOODS__ = '___INITIALIZE_GOODS__'
export const REQUEST_POPULAR_GOODS = 'REQUEST_POPULAR_GOODS'
export const REQUEST_POPULAR_GOODS_FAILED = 'REQUEST_POPULAR_GOODS_FAILED'
export const REQUEST_POPULAR_GOODS_SUCCESS = 'REQUEST_POPULAR_GOODS_SUCCESS'
/* ACTIONS TYPES */
export type ___INITIALIZE_GOODS__ACTION = {
  type: typeof ___INITIALIZE_GOODS__
}
export type REQUEST_POPULAR_GOODS__ACTION = {
  type: typeof REQUEST_POPULAR_GOODS
}
export type REQUEST_POPULAR_GOODS_FAILED_ACTION = {
  type: typeof REQUEST_POPULAR_GOODS_FAILED
  error: TApiError[]
}
export type REQUEST_POPULAR_GOODS_SUCCESS_ACTION = {
  type: typeof REQUEST_POPULAR_GOODS_SUCCESS
  payload: TPopularGood[]
}
/*  */
export type GOODS_ACTIONS =
  | ___INITIALIZE_GOODS__ACTION
  | REQUEST_POPULAR_GOODS__ACTION
  | REQUEST_POPULAR_GOODS_FAILED_ACTION
  | REQUEST_POPULAR_GOODS_SUCCESS_ACTION
