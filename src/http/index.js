
import axios from "axios";


const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
    // обычные не требуют авторизации
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
    // headerAuthorization + token
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}





