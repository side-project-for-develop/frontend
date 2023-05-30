import { useAppSelector } from "@/Redux/store";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER,
});

//  request Interceptor
api.interceptors.request.use(
  (data) => {
    const { token } = useAppSelector((state) => state.user);
    data.headers!.Authorization = "Bearer " + token;
    return data;
  },
  () => {}
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
