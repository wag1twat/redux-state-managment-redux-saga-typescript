import { launch, dateLaunchWatcher } from './reducers/root/actions'
import { all } from 'redux-saga/effects'
import { authorizeWatcher, refreshWatcher } from './reducers/user/actions'
import { requestPopularGoodsWatcher } from './reducers/goods/actions'
import {
  notificationSuccessWatcher,
  notificationErrorWatcher,
} from './reducers/norifications/actions'

export function* rootSaga() {
  yield all([
    launch(),
    dateLaunchWatcher(),
    authorizeWatcher(),
    refreshWatcher(),
    requestPopularGoodsWatcher(),
    notificationSuccessWatcher(),
    notificationErrorWatcher(),
  ])
  // code after all-effect
}
