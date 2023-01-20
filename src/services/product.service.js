import { api } from "./api";

export const getAllProducts = () => {
  return api.get("/products");
};

export const getProduct = (id) => {
  return api.get(`/product/${id}`);
};

export const addProduct = (data) => {
  return api.post("/product", data);
};

export const editProduct = (id, data) => {
  return api.put(`/product/${id}`, data);
};

export const removeProduct = (id) => {
  return api.delete(`/product/${id}`);
};
