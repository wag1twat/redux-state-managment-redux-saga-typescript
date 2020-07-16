import { call, put, takeEvery } from 'redux-saga/effects'
import { instance, keys } from '../../../api'
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_REQUEST_ACTION,
  LOGIN_REFRESH,
  LOGIN_REFRESH_ACTION,
} from '../types'
import { checkError, Logger } from '../../../helpers'

//authorizing
export function* authorizeWatcher() {
  yield takeEvery(LOGIN_REQUEST, authorizeWorker)
}

function* authorizeWorker(action: LOGIN_REQUEST_ACTION) {
  /* === */
  const { username, password } = action
  try {
    const response = yield call(authorizeHelper, username, password)
    const data = response.data
    //tokens
    const { access_token, access_token_refresh } = data
    //keys
    const main = keys.main
    const refresh = keys.refresh
    //storage set
    localStorage.setItem(main, access_token)
    localStorage.setItem(refresh, access_token_refresh)
    //dispatch
    yield put({ type: LOGIN_SUCCESS, authorize: true, error: null })
  } catch (err) {
    const error = checkError(err)
    yield put({
      type: LOGIN_ERROR,
      authorize: false,
      error,
    })
  }
}

function* authorizeHelper(username = '', password = '') {
  const response = yield instance().open().authorize({
    username,
    password,
  })
  return response
}
/* === */

/* refresh */
export function* refreshWatcher() {
  yield takeEvery(LOGIN_REFRESH, refreshWorker)
}

function* refreshWorker(action: LOGIN_REFRESH_ACTION) {
  /* === */
  //keys
  const main = keys.main
  const refresh = keys.refresh
  try {
    const response = yield call(refreshHelper)
    const data = response.data
    //tokens
    const { access_token, access_token_refresh } = data
    //storage set
    localStorage.setItem(main, access_token)
    localStorage.setItem(refresh, access_token_refresh)
    //dispatch
    yield put({ type: LOGIN_SUCCESS, authorize: true, error: null })
  } catch (err) {
    const error = checkError(err)
    yield put({
      type: LOGIN_ERROR,
      authorize: false,
      error,
    })
  }
}
function* refreshHelper() {
  const response = yield instance().close().refresh()
  return response
}
