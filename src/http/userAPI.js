
import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode'
import toast from "react-hot-toast";


export const registration = async (firstName, surName, phone, email, gender, age) => {
    const { data } = await $host.post('user', { firstName, surName, phone, email, gender, age })
    // localStorage.setItem('token', data.token)
    localStorage.setItem('localStorageUsers', JSON.stringify(data))
    localStorage.setItem('token', JSON.stringify(data.token))
    toast.success('Успішно!')
    const token = localStorage.setItem(true)
    return jwt_decode(data.token)
}

export const login = async (login, password) => {
    const { data } = await $host.post('user/login', { login, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async (token) => {
    const response = await $authHost.post('user/me', { token })
    return response
}




