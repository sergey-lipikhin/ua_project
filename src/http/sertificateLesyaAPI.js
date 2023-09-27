import { $authHost } from "./index";

export const fetchSertificateLesya = async (name, score, gender) => {
    console.log(gender)
    const { data } = await $authHost.post('certificate/lesya', {name, score, gender})
    return data
}