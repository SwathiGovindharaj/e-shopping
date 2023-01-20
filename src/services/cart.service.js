import { api } from "./api";

export const getAllCarts = () => {
  return api.get("/carts");
};

export const getCart = (id) => {
  return api.get(`/cart/${id}`);
};

export const addCart = (data) => {
  return api.post("/cart", data);
};

export const editCart = (id, data) => {
  return api.put(`/cart/${id}`, data);
};

export const removeCart = (id) => {
  return api.delete(`/cart/${id}`);
};
