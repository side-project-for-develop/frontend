import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER,
});

//  request Interceptor
api.interceptors.request.use(
  (data) => {
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
