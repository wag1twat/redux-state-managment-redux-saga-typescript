import {
  NOTIFICATIONS_ACTIONS,
  TNotificationsReducer,
  ___INITIALIZE_NOTIFICATIONS__,
  SET_SUCCESS_NOTIFICATION,
  HIDE_SUCCESS_NOTIFICATION,
  SET_ERROR_NOTIFICATION,
  HIDE_ERROR_NOTIFICATION,
} from './types'
const initialState: TNotificationsReducer = {
  success: [],
  errors: [],
}

export const notificationsReducer = (
  state = initialState,
  action: NOTIFICATIONS_ACTIONS
): TNotificationsReducer => {
  switch (action.type) {
    /* success */
    case SET_SUCCESS_NOTIFICATION:
      const setSuccessData = [...state.success]
      const successNotification = {
        index: setSuccessData.length,
        notification: action.payload,
      }
      setSuccessData.push(successNotification)
      return {
        ...state,
        success: setSuccessData,
      }
    case HIDE_SUCCESS_NOTIFICATION:
      let hideSuccessData = [...state.success]
      hideSuccessData = hideSuccessData.filter((h) => h.index !== action.index)
      return {
        ...state,
        success: hideSuccessData,
      }
    /* errors */
    case SET_ERROR_NOTIFICATION:
      const setErrorData = [...state.errors]
      const errorNotification = {
        index: setErrorData.length,
        notification: action.payload,
      }
      setErrorData.push(errorNotification)
      return {
        ...state,
        errors: setErrorData,
      }
    case HIDE_ERROR_NOTIFICATION:
      let hideErrorData = [...state.errors]
      hideErrorData = hideErrorData.filter((h) => h.index !== action.index)
      return {
        ...state,
        errors: hideErrorData,
      }
    /*  */
    case ___INITIALIZE_NOTIFICATIONS__:
      return state
    default:
      return state
  }
}
