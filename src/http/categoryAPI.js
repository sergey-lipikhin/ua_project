import { $authHost } from "./index";


export const createCategory = async (name) => {
    const { data } = await $authHost.post('category', {name})
    return data
}

export const fetchCategory = async () => {
    const { data } = await $authHost.get('category', {})
    return data
}

export const putCategory = async (id, name) => {
    const { data } = await $authHost.put('category', {id, name})
    return data
}

export const getOneCategory = async () => {
    const { data } = await $authHost.get('category/some/1', {})
    return data
}

export const deleteCategory = async (id) => {
    const { data } = await $authHost.delete(`category/some/${id}`)
    return data
}