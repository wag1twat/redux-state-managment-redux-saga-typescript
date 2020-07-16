import { takeEvery, put, delay, select, call } from 'redux-saga/effects'
import {
  REQUEST_SUCCESS_NOTIFICATION,
  REQUEST_SUCCESS_NOTIFICATION_ACTION,
  SET_SUCCESS_NOTIFICATION,
  HIDE_SUCCESS_NOTIFICATION,
  SET_ERROR_NOTIFICATION,
  HIDE_ERROR_NOTIFICATION,
  REQUEST_ERROR_NOTIFICATION_ACTION,
  REQUEST_ERROR_NOTIFICATION,
} from '../types'
import { TRootState } from '../../..'
/* success */
export function* notificationSuccessWatcher() {
  yield takeEvery(REQUEST_SUCCESS_NOTIFICATION, notificationSuccessWorker)
}
const successNotificationLength = (state: TRootState) =>
  state.notifications.success.length
function* notificationSuccessWorker(
  action: REQUEST_SUCCESS_NOTIFICATION_ACTION
) {
  const { payload } = action
  const index = yield select(successNotificationLength)
  yield put({
    type: SET_SUCCESS_NOTIFICATION,
    payload,
  })
  yield call(notificationSuccessHide, index)
}
function* notificationSuccessHide(index: number) {
  const exp = 1000
  const idx = index + 4
  const timeOut = idx * exp
  yield delay(timeOut)
  yield put({
    type: HIDE_SUCCESS_NOTIFICATION,
    index,
  })
}
/* errors */
export function* notificationErrorWatcher() {
  yield takeEvery(REQUEST_ERROR_NOTIFICATION, notificationErrorWorker)
}
const errorsNotificationLength = (state: TRootState) =>
  state.notifications.errors.length
function* notificationErrorWorker(action: REQUEST_ERROR_NOTIFICATION_ACTION) {
  const { payload } = action
  const index = yield select(errorsNotificationLength)
  yield put({
    type: SET_ERROR_NOTIFICATION,
    payload,
  })
  yield call(notificationErrorHide, index)
}
function* notificationErrorHide(index: number) {
  const exp = 1000
  const idx = index + 4
  const timeOut = idx * exp
  yield delay(timeOut)
  yield put({
    type: HIDE_ERROR_NOTIFICATION,
    index,
  })
}
