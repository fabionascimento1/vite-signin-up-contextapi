import axios from 'axios'
import { getUserLocalStore } from '../context/AuthProvider/util'

export const Api = axios.create({
    baseURL: "http://localhost:3333/api/"
})

Api.interceptors.request.use(
    (config: any) => {
        const user = getUserLocalStore()

        config.headers.Authorization = user?.token

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)