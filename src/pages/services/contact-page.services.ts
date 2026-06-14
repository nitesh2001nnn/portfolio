/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_CONFIG } from "../../helpers/api-config"
import config from "../../helpers/config"
import { axiosInstance } from "../../interceptor/interceptor-main"


export const contactPageService = (params: any) => {
    console.log("base urls", config.baseUrl, API_CONFIG.CONTACT_ME)
    axiosInstance.post(`${config.baseUrl}${API_CONFIG.CONTACT_ME}`, params.payload).then((res: any) => params.successCb(res)).catch((err: any) => params.errorCb(err))

}