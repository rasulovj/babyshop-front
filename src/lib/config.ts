import type { AdminApiConfig } from "@/types/types";
import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";

export const getAdminApiConfig = (): AdminApiConfig => {
  const apiUrl = import.meta.env.VITE_API_URL;

  if (!apiUrl) {
    throw new Error("VITE_API_URL is not defined in environment variables");
  }

  const isProduction =
    import.meta.env.VITE_NODE_ENV === "production" || import.meta.env.PROD;

  return {
    baseURL: `${apiUrl}/api`,
    isProduction,
  };
};

const createApiInstace = (): AxiosInstance => {
  const { baseURL } = getAdminApiConfig();
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    timeout: 30000,
  });

  instance.interceptors.request.use(
    (config) => {
      const authData = localStorage.getItem("auth-storage");
      if (authData) {
        try {
          const parsedData = JSON.parse(authData);
          const token = parsedData.state?.token;
          if (token) {
            config.headers.Authorization = `Bearer ${token} `;
          }
        } catch (error) {
          console.log(error);
        }
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
      if (error.code == "ERR_NETWORK") {
        console.log("Network error - make sure API is running!");
      }
      if (error.response?.status === 401) {
        localStorage.removeItem("auth-storage");
        window.location.href = "/login";
        console.log(error);
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export const adminApi = createApiInstace();

export const ADMIN_API_ENDPOINTS = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  LOGOUT: "/auth/logout",
  USERS: "/users",
  PRODUCTS: "/products",
  CATEGORIES: "/categories",
  ORDERS: "/orders",
} as const;

export const buildAdminQueryParams = (
  params: Record<string, string | number | boolean | undefined>
): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.append(key, String(value));
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : "";
};

export default adminApi;
