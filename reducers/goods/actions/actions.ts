import {
  REQUEST_POPULAR_GOODS,
  REQUEST_POPULAR_GOODS__ACTION,
} from '../types'

export const requestPopularGoods = (): REQUEST_POPULAR_GOODS__ACTION => ({
  type: REQUEST_POPULAR_GOODS,
})
