import { API_CONFIG } from "../helpers/api-config";
import config from "../helpers/config";
import { axiosInstance } from "../interceptor/interceptor-main";

export const signupApi = (params: any) => {
  axiosInstance
    .post(`${config.baseUrl}${API_CONFIG.SIGNUP}`, params.payload)
    .then((res) => params.successCB(res))
    .catch((err) => {
      params.errorCB(err);
    });
};
