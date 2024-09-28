import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

export const TOKEN_KEY = 'AccessToken'
export const REFRESH_TOKEN_KEY = 'RefreshToken'

const axiosClient = axios.create({
    baseURL: "https://localhost:5001",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  
  axiosClient.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; 
      }
  
      // Check if the request data is FormData
      if (config.data instanceof FormData) {
        config.headers.Accept = "gzip, deflate, br";
        config.headers["Content-Type"] = "multipart/form-data";
        // No need to set Content-Type for FormData, it will be automatically set
      } else {
        config.headers.Accept = "application/json";
        config.headers["Content-Type"] = "application/json";
      }
  
      return config;
    },
    (error) => {
      console.error("Request error:", error);
      return Promise.reject(error);
    }
  );
  axiosClient.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    async (error) => {
        if (error.response) {
            console.error("Response error:", error.response);
            if (error.response.status === 401) {
                console.log("Refreshing token...");

                const refreshToken = localStorage.getItem("refreshToken");
                if (refreshToken) {
                    try {
                        const credentials = { refreshToken };
                        const response = await axiosClient.post("/api/v1/users/RefreshToken", credentials);
                        localStorage.setItem("accessToken", response.data.accessToken);
                        localStorage.setItem("refreshToken", response.data.refreshToken);
                        toast("Token refreshed successfully");

                        // Retry the original request with the new token
                        error.config.headers.Authorization = `Bearer ${response.data.accessToken}`;
                        return axiosClient.request(error.config);
                    } catch (refreshError) {
                        console.error("Refresh token error:", refreshError);
                        localStorage.removeItem("accessToken");
                        localStorage.removeItem("refreshToken");
                        toast("Session expired. Please log in again.");
                    }
                } else {
                    toast("No refresh token available. Please log in again.");
                }
            }
        }
        return Promise.reject(error);
    }
);
  
  export default axiosClient;