import { $authHost } from "./index";


export const sentMailTaras = async (mail, url) => {
    const { data } = await $authHost.post('mail/taras', {mail, url})
    return data
}