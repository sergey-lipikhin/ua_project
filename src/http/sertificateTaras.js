import { $authHost } from "./index";

export const fetchSertificateTaras = async (name, score, gender) => {
    console.log(gender)
    const { data } = await $authHost.post('certificate/shevchenko', {name, score, gender})
    return data
}