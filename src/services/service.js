import axios from "axios";

const service = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

service.interceptors.request.use((config) => {
  const storedToken = localStorage.getItem("authToken");
  config.headers = storedToken && { Authorization: `Bearer ${storedToken}` };

  return config;
});

export default service;
