import { takeEvery, put, call, all } from 'redux-saga/effects'
import {
  REQUEST_POPULAR_GOODS,
  REQUEST_POPULAR_GOODS__ACTION,
  REQUEST_POPULAR_GOODS_FAILED,
  REQUEST_POPULAR_GOODS_SUCCESS,
} from '../types'
import { checkError } from '../../../helpers'
import { instance } from '../../../api'
import { TApiError } from '../../../types'
import { requestErrorNotification } from '../../norifications/actions/actions'

//watcher
export function* requestPopularGoodsWatcher() {
  yield takeEvery(REQUEST_POPULAR_GOODS, requestPopularGoodsWorker)
}
//worker
function* requestPopularGoodsWorker(action: REQUEST_POPULAR_GOODS__ACTION) {
  try {
    const response = yield call(requestPopularGoodsAsync)
    const data = response.data
    yield put({
      type: REQUEST_POPULAR_GOODS_SUCCESS,
      payload: data,
    })
  } catch (err) {
    yield checkError(err)
  }
}
//fetcher
function* requestPopularGoodsAsync() {
  const response = yield instance().open().getPopularGoods()
  return response
}
