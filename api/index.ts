import axios from 'axios'
import { TAuthorizeBody } from './types'
import { paths } from './paths'
import JwtDecode from 'jwt-decode'

export const keys = {
  main: process.env.REACT_APP_CLIENT_TOKEN
    ? process.env.REACT_APP_CLIENT_TOKEN
    : '',
  refresh: process.env.REACT_APP_CLIENT_TOKEN_REFRESH
    ? process.env.REACT_APP_CLIENT_TOKEN_REFRESH
    : '',
  city: process.env.REACT_APP_CLIENT_CITY
    ? process.env.REACT_APP_CLIENT_CITY
    : '',
}
export const instance = () => {
  const mainKey = keys.main
  const refreshKey = keys.refresh
  const token = localStorage.getItem(mainKey)
  const refreshToken = localStorage.getItem(refreshKey)
  return {
    open: () => ({
      authorize: (body: TAuthorizeBody) =>
        instanceAxiosOpen().post(paths.authorize, body),
      getPopularGoods: () => instanceAxiosOpen().get(paths.getPopularGoods),
    }),
    close: () => ({
      refresh: () => {
        if (token) {
          const currentTime = new Date().getTime() / 1000
          const decode: { exp: number } = JwtDecode(token)
          if (currentTime > decode.exp) {
            return instanceAxiosClose(refreshToken, paths.refreshLogin).get('')
          } else return null
        } else return null
      },
    }),
  }
}
/* INSTANCE OPEN/CLOSE */
const instanceAxiosOpen = (path: string = '') =>
  axios.create({
    baseURL: paths.baseURL + path,
    headers: {
      ContentType: 'application/json',
    },
  })
const instanceAxiosClose = (token: string | null, path: string) =>
  axios.create({
    baseURL: paths.baseURL + path,
    headers: {
      Authorization: `Bearer ${token}`,
      ContentType: 'application/json',
    },
  })
