import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './reducers/root'
import { userReducer } from './reducers/user'

import { rootSaga } from './rootSaga'
/* TYPES */
import { TUserReducer } from './reducers/user/types'
import { TRootReducer } from './reducers/root/types'
import { notificationsReducer } from './reducers/norifications'
import { TNotificationsReducer } from './reducers/norifications/types'
import { goodsReducer } from './reducers/goods'
import { TGoodsReducer } from './reducers/goods/types'
/* ====== */

const initialState = {}

const combined = combineReducers({
  root: rootReducer,
  user: userReducer,
  notifications: notificationsReducer,
  goods: goodsReducer,
})
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combined,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export type TRootState = {
  root: TRootReducer
  user: TUserReducer
  notifications: TNotificationsReducer
  goods: TGoodsReducer
}

export { store }
