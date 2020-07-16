import {
  TGoodsReducer,
  GOODS_ACTIONS,
  ___INITIALIZE_GOODS__,
  REQUEST_POPULAR_GOODS,
  REQUEST_POPULAR_GOODS_FAILED,
  REQUEST_POPULAR_GOODS_SUCCESS,
} from './types'

const initialState: TGoodsReducer = {
  loading: false,
  error: [],
  popular: [],
}

export const goodsReducer = (
  state = initialState,
  action: GOODS_ACTIONS
): TGoodsReducer => {
  switch (action.type) {
    case REQUEST_POPULAR_GOODS:
      return {
        ...state,
        loading: true,
      }
    case REQUEST_POPULAR_GOODS_SUCCESS:
      return {
        ...state,
        loading: false,
        popular: action.payload,
      }
    case REQUEST_POPULAR_GOODS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case ___INITIALIZE_GOODS__:
      return state
    default:
      return state
  }
}
