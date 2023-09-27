import { $authHost } from "./index";


export const createSertificate = async (name, count, gender) => {
    const { data } = await $authHost.post('certificate', {name, count, gender})
    return data
}

