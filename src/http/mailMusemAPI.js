import { $authHost } from "./index";


export const sentMailMusem = async (mail, url) => {
    const { data } = await $authHost.post('mail/museum', {mail, url})
    return data
}