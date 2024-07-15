import axios from "axios";
import { LOCAL_STORAGE } from "../consts";

const baseURL = import.meta.env.VITE_BASE_API_URL;

const instance = axios.create({
  baseURL,
});

instance.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem(LOCAL_STORAGE.TOKEN) || "";

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default instance;
