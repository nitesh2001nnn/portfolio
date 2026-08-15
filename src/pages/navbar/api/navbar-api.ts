import axios from "axios"
import { API_CONFIG } from "../../../helpers/api-config"

export const navbarApi = async () => {
    const response = await axios.get(`${API_CONFIG.BASEURL}${API_CONFIG.NAVBAR}`);
    return response
}