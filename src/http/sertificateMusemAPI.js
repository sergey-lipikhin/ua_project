import { $authHost } from "./index";


export const fetchSertificateMusem = async (name, count, gender) => {
    const { data } = await $authHost.post('certificate/museum', {name, count, gender})
    return data
}