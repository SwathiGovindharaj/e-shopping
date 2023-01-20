import { api } from "./api";

export const getAllWishLists = () => {
  return api.get("/wishlists");
};

export const getWishlist = (id) => {
  return api.get(`/wishlist/${id}`);
};

export const addWishlist = (data) => {
  return api.post("/wishlist", data);
};

export const editWishlist = (id, data) => {
  return api.put(`/wishlist/${id}`, data);
};

export const removeWishlist = (id) => {
  return api.delete(`/wishlist/${id}`);
};
