import { $authHost } from "./index";


export const sentMailLesya = async (mail, url) => {
    const { data } = await $authHost.post('mail/lesya', {mail, url})
    return data
}