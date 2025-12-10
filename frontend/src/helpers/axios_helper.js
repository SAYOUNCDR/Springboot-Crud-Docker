import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const getAuthToken = () => {
  return window.localStorage.getItem("token");
};

export const setAuthHeader = (token) => {
  if (token !== null) {
    window.localStorage.setItem("token", token);
  } else {
    window.localStorage.removeItem("token");
  }
};

axios.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
