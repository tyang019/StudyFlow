import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// attach token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (data: any) =>
  API.post("/auth/login", data).then((res) => res.data);

export const register = (data: any) =>
  API.post("/auth/register", data).then((res) => res.data);

export const getResources = () =>
  API.get("/resources").then((res) => res.data);

export const createResource = (data: any) =>
   API.post("/resources", data).then((res) => res.data);

export const updateResource = (id: number, data: any) =>
  API.put(`/resources/${id}`, data).then((res) => res.data);

export const deleteResource = (id: number) =>
  API.delete(`/resources/${id}`).then((res) => res.data);