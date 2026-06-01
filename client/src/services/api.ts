import axios from "axios";

type AuthPayload = {
  email: string;
  password: string;
};

export type AuthResponse = {
  user: {
    id: number;
    email: string;
  };
  token: string;
};

export type Resource = {
  id: number;
  title: string;
  type: string;
  completed: boolean;
  userId?: number;
};

export type ResourceInput = {
  title: string;
  type: string;
  completed: boolean;
};


const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:5000/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export const getApiErrorMessage = (error: unknown, fallback: string) => {
  if (axios.isAxiosError<{ error?: string; message?: string }>(error)) {
    return error.response?.data?.error || error.response?.data?.message || fallback;
  }

  return fallback;
};

export const login = (data: AuthPayload) =>
  API.post<AuthResponse>("/auth/login", data).then((res) => res.data);

export const register = (data: AuthPayload) =>
  API.post<AuthResponse>("/auth/register", data).then((res) => res.data);

export type ResourceFilters = {
  completed?: "true" | "false";
  type?: string;
  q?: string;
  sort?: "title_asc" | "title_desc";
};

export const getResources = (filters: ResourceFilters = {}) =>
  API.get<Resource[]>("/resources", { params: filters }).then((res) => res.data);

export const createResource = (data: ResourceInput) =>
  API.post<Resource>("/resources", data).then((res) => res.data);

export const updateResource = (id: number, data: Partial<ResourceInput>) =>
  API.put(`/resources/${id}`, data).then((res) => res.data);

export const deleteResource = (id: number) =>
  API.delete(`/resources/${id}`).then((res) => res.data);