// vendors
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

// components
import WishListCard from "./WishListCard";
import Loader from "../../components/Loader/Loader";

// services
import { getAllWishLists } from "../../services/wishlist.service";

// utils
import routerLinks from "../../data/routerLinks";

const Wishlist = () => {
  const navigate = useNavigate();

  const [wishLists, setWishLists] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllWishListsByUser = () => {
    setLoading(true);
    getAllWishLists()
      .then((response) => {
        let wishlists = response.data.filter(
          (wishlist) => wishlist.userId === "1"
        );
        setWishLists(wishlists);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllWishListsByUser();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="products-container mt-5">
      {wishLists && wishLists.length > 0 ? (
        wishLists.map((wishlist) => {
          return <WishListCard data={wishlist} />;
        })
      ) : (
        <Typography>Your Wishlist is empty!</Typography>
      )}
    </div>
  );
};

export default Wishlist;
