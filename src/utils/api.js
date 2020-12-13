import store from "../store/index";
import axios from "axios";

const instance = axios.create({
  baseURL: `https://localhost:44339`,
});

instance.interceptors.request.use(function (config) {
  config.headers.Authorization = store.getState().auth.access_token;

  return config;
});

export default instance;
