import axios from 'axios'

const axiosBackend = axios.create({
    baseURL: 'https://opentdb.com',
    timeout: 10000
})

export default axiosBackend
