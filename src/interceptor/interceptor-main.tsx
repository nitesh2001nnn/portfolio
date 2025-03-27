import axios from "axios";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }
    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }

    try {
      return config;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    return Promise.reject(err);
  }
);
