import axios from "axios";
import { getCookies } from "../utils/cookies";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const httpService = axios.create({
  baseURL: BASE_URL,
});

httpService.interceptors.request.use(
  (req) => {
    const accessToken = getCookies("accessToken");
    // add token to headers
    if (accessToken) {
      req.headers["Authorization"] = `bearer ${accessToken}`;
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
