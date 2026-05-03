import axios from "axios";

type AuthPayload = {
  email: string;
  password: string;
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
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (data: AuthPayload) =>
  API.post("/auth/login", data).then((res) => res.data);

export const register = (data: AuthPayload) =>
  API.post("/auth/register", data).then((res) => res.data);

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