import { api } from "./api";

export const getAllOrders = () => {
  return api.get("/orders");
};

export const getOrder = (id) => {
  return api.get(`/order/${id}`);
};

export const addOrder = (data) => {
  return api.post("/order", data);
};

export const editOrder = (id, data) => {
  return api.put(`/order/${id}`, data);
};

export const removeOrder = (id) => {
  return api.delete(`/order/${id}`);
};
