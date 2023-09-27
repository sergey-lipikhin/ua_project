
import { $authHost } from "./index";


export const createQuestion = async (task, name, description,category) => {
    const { data } = await $authHost.post('question', {task, name, description,category })
    return data
}

export const fetchQuestion = async () => {
    const { data } = await $authHost.get('question/get/2/1', {})
    return data
}

export const UpdateQuestion = async () => {
    const { data } = await $authHost.put('question', {})
    return data
}

export const fetchOneQuestion = async () => {
    const { data } = await $authHost.get('question/some/1', {})
    return data
}

export const DeleteQuestion = async () => {
    const { data } = await $authHost.delete('question/some/1', {})
    return data
}