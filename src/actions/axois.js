import axios from 'axios'
import { toastr } from "react-redux-toastr";

// axios gloable setting
axios.defaults.timeout = 20000
axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000/v1' : 'https://riafan-api.herokuapp.com/v1'

// http response interceptor
axios.interceptors.response.use(data => {
  return data
}, error => {
  const msg = error.toString()
  toastr.error('消息', msg)
  return Promise.reject(error)
})

export default axios
