import axios from "axios"; // step first import axios
const axiosInstance = axios.create({
  // step second make axios instance
  baseURL: import.meta.env.VITE_API_BASE_URL, // step third add base url
  withCredentials: true, // browser will send cookies to server automatically on every single request
});

export default axiosInstance;
