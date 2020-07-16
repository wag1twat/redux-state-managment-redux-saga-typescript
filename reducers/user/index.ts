import {
  USER_REDUCER_ACTIONS,
  TUserReducer,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  __INITIALIZE_USER__,
} from './types'

const initialState: TUserReducer = {
  error: null,
  authorize: false,
  loading: false,
}
export const userReducer = (
  state = initialState,
  action: USER_REDUCER_ACTIONS
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: action.error,
        authorize: action.authorize,
        loading: false,
      }
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
        authorize: action.authorize,
        loading: false,
      }
    case __INITIALIZE_USER__:
      return state
    default:
      return state
  }
}
