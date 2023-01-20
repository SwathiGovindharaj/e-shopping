import { api } from "./api";

export const getAllUsers = () => {
  return api.get("/users");
};

export const getUser = (id) => {
  return api.get(`/user/${id}`);
};

export const addUser = (data) => {
  return api.post("/user", data);
};

export const editUser = (id, data) => {
  return api.put(`/user/${id}`, data);
};

export const removeUser = (id) => {
  return api.delete(`/user/${id}`);
};
