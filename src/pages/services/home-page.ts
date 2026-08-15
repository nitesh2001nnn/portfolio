/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_CONFIG } from "../../helpers/api-config"
import { axiosInstance } from "../../interceptor/interceptor-main"

export const home_Page_service = (params: any) => {
    axiosInstance.get(`${API_CONFIG.BASEURL}/api/homes?populate[profile][populate][headerData][populate]=image&populate[profile][populate][projects][populate][data][populate]=img`).then((res: any) => params.successCB(res)).catch((err: any) =>
        params.errorCB(err)
    )
}

export const about_Page_Service = (params: any) => {
    axiosInstance.get(`${API_CONFIG.BASEURL}/api/about-work?populate[skills][populate]=dataSets&populate[top_skills]=*`).
        then((res: any) => params.successCb(res)).
        catch((err: any) => params.errorCb(err))
}

export const contact_Page_Service = (params: any) => {
    axiosInstance.get(`${API_CONFIG.BASEURL}/api/contact-data?populate[img]=true&populate[data][populate]=img`).then((res) => params.successCb(res)).catch((err: any) => params.errorCb(err))
}

export const portfolio_page_service = async () => {
    const res = await axiosInstance.get(`${API_CONFIG.BASEURL}${API_CONFIG.PORTFOLIO}`);
    return res.data

}