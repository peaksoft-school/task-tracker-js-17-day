import axios from 'axios'

const BASE_URL = 'http://3.75.184.75'

export const axiosInstance = axios.create({
   baseURL: BASE_URL,

   heders: {
      'Content-Type': 'application/json',
   },
})

let customStore

export const injectStore = (store) => {
   customStore = store
}

axiosInstance.interceptors.request.use(
   (config) => {
      const updateConfig = { ...config }

      const { token } = customStore.getState()?.auth

      if (token) {
         updateConfig.headers.Authorization = `Bearer ${token}`
      }

      return updateConfig
   },

   (error) => {
      return Promise.reject(error)
   }
)
axiosInstance.interceptors.request.use(
   (respons) => {
      return Promise.resolve(respons)
   },
   // перепроверка ошибки от бек
   (error) => {
      return Promise.reject(error)
   }
)
