import { $authHost } from "./index";


export const fetchSertificate = async (name, count, gender, age) => {
    const { data } = await $authHost.post('certificate', {name, count, gender, age})
    return data
}
