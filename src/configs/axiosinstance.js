import axios from 'axios'

const BASE_URL = 'http://3.72.63.246'

export const axiosInstance = axios.create({
   baseURL: BASE_URL,

   headers: {
      'Content-Type': 'application/json',
   },
})

// redax store
let customStore
// store это с main.jsx приходит данные что было доступ со всего проекта
export const injectStore = (store) => {
   customStore = store
}

// отправлять request в бекенд
axiosInstance.interceptors.request.use(
   (config) => {
      const updateConfig = { ...config }

      const { token } = customStore.getState().auth

      if (token) {
         updateConfig.headers.Authorization = `Bearer ${token}`
      }

      return updateConfig
   },

   (error) => {
      return Promise.reject(error)
   }
)
// получать response данные с бекенда
axiosInstance.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },

   (error) => {
      return Promise.reject(error)
   }
)
