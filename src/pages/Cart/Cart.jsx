// vendors
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

// components
import CartItemCard from "./CartItemCard";
import Loader from "../../components/Loader/Loader";

// services
import { getAllCarts } from "../../services/cart.service";

// utils
import routerLinks from "../../data/routerLinks";

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllCartsByUser = () => {
    setLoading(true);
    getAllCarts()
      .then((response) => {
        let cartItemsByUser = response.data.filter(
          (cartItem) => cartItem.userId === "1"
        );
        setCartItems(cartItemsByUser);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllCartsByUser();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="products-container mt-5">
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((cartItem) => {
          return <CartItemCard data={cartItem} />;
        })
      ) : (
        <Typography>Your Cart is empty!</Typography>
      )}
    </div>
  );
};

export default Cart;
