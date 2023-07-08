import axios from "axios";


export const Axios = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/`,
});

Axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response.status === 401) {
      localStorage.removeItem("TOKEN");
      // window.location.reload();
    } else if (response.status === 404) {
      //Show not found
    }

    throw error;
  }
);

export default Axios;
