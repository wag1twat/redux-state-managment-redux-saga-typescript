import { LOGIN_REQUEST } from '../types'

export const requestAuthorize = (username: string, password: string) => ({
  type: LOGIN_REQUEST,
  username,
  password,
})
