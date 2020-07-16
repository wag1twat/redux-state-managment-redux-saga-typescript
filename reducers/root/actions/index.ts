import { takeEvery, put } from 'redux-saga/effects'
import { SET_LAUNCH_DATE, LAUNCH } from '../types'

export function* launch() {
  yield console.log(`launch...`)
}

export function* dateLaunchWatcher() {
  yield takeEvery(LAUNCH, dateLaunchWorker)
}
function* dateLaunchWorker() {
  const date = new Date()
  yield put({ type: SET_LAUNCH_DATE, payload: date })
}
