import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

api.defaults.headers.common["apikey"] = process.env.REACT_APP_ANON_PUBLIC;
api.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.REACT_APP_ANON_PUBLIC}`;

export default api;
