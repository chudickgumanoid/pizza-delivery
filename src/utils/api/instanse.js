import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_API_URL;

const instance = axios.create({
  baseURL,
});

instance.defaults.headers.common["Authorization"] =
  localStorage.getItem("token") || "";

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default instance;
