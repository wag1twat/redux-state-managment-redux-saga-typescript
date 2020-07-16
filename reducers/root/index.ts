import {
  ROOT_ACTIONS,
  TRootReducer,
  SET_LAUNCH_DATE,
  ___INITIALIZE_ROOT__,
} from './types'
import { LAUNCH } from './types'

const initialState: TRootReducer = {
  launch: false,
  launchDate: null,
}
export const rootReducer = (state = initialState, action: ROOT_ACTIONS) => {
  switch (action.type) {
    case LAUNCH:
      return {
        ...state,
        launch: true,
      }
    case SET_LAUNCH_DATE:
      return {
        ...state,
        launchDate: action.payload,
      }
    case ___INITIALIZE_ROOT__:
      return state
    default:
      return state
  }
}
