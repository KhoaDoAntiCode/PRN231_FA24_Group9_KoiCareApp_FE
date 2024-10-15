import axios, { AxiosResponse } from "axios";

export const TOKEN_KEY = 'AccessToken'
export const REFRESH_TOKEN_KEY = 'RefreshToken'

const axiosClient = axios.create({
    baseURL: "https://localhost:5001",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  
  
  export default axiosClient;