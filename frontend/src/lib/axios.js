import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true   // browser will send the cookies to the server auto for every single req 
});

export default axiosInstance;