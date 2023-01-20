import { api } from "./api";

export const getAllCategories = () => {
  return api.get("/categories");
};

export const getCategory = (id) => {
  return api.get(`/category/${id}`);
};

export const addCategory = (data) => {
  return api.post("/category", data);
};

export const editCategory = (id, data) => {
  return api.put(`/category/${id}`, data);
};

export const removeCategory = (id) => {
  return api.delete(`/category/${id}`);
};
