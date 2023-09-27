import { $authHost } from "./index";


export const sentMail = async (mail, url) => {
    const { data } = await $authHost.post('mail', {mail, url})
    return data
}