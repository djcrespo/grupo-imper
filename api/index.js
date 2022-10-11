import axios from 'axios'

const service = axios.create({
  baseURL: 'https://api.emailjs.com/api/v1.0/email/'
})

service.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    return Promise.reject(error.response)
  }
)

export default service
