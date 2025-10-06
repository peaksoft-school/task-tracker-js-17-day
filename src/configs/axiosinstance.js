import axios from 'axios'

const BASE_URL = 'http://3.75.184.75'

export const axiosInstance = axios.create({
   baseURL: BASE_URL,

   heders: {
      'Content-Type': 'application/json',
   },
})
