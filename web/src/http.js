import axios from 'axios'
import Vue from 'vue'

const http = axios.create({
    baseURL: 'http://localhost:3000/user/api'
})

//通用的错误处理，axios的响应拦截
http.interceptors.response.use(res => {
    return res
}, err => {
    if (err.response.data.message) {

        Vue.prototype.$message({
            type: 'error',
            message: err.response.data.message
        })
    }
    return Promise.reject(err)
})

export default http