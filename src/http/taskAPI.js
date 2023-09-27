import { $authHost } from "./index";


export const createTask = async (name) => {
    const { data } = await $authHost.post('task', {name})
    return data
}

export const fetchTask = async () => {
    const { data } = await $authHost.get('task', {})
    return data
}

export const putTask = async (id, name) => {
    const { data } = await $authHost.put('task', {id, name})
    return data
}

export const getOneTask = async () => {
    const { data } = await $authHost.get('task/some/1', {})
    return data
}

export const deleteTask = async (id) => {
    const { data } = await $authHost.delete(`task/some/${id}`)
    return data
}