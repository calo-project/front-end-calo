import axios from "axios";

export const axiosInstance = axios.create({
    // baseURL: 'https://cbt-io.hmifunej.id/api',
    baseURL: 'http://127.0.0.1:8000/api',
    // withCredentials: true,
})