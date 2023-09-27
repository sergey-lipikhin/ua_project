import { $authHost } from "./index";


export const createAnswer = async (question, name, description) => {
    const { data } = await $authHost.post('answer', {question, name, description})
    return data
}

export const fetchAnswer = async () => {
    const { data } = await $authHost.get('answer', {})
    return data
}

export const UpdateAnswer = async (id,name, description) => {
    const { data } = await $authHost.put('answer', {id,name, description})
    return data
}

export const fetchOneAnswer = async () => {
    const { data } = await $authHost.get('answer/some/1', {})
    return data
}

export const DeleteAnswer = async () => {
    const { data } = await $authHost.delete('answer/some/1', {})
    return data
}