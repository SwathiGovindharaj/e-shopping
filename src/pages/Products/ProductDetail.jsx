// vendors
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// utils
import routerLinks from "../../data/routerLinks";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});

  useEffect(() => {
    if (location?.state?.product) setProduct(location?.state?.product);
  }, []);

  const handleAddToWishlistClick = () => {
    navigate(routerLinks.WISHLIST);
    console.log("Add to Wishlist");
  };

  const handleAddToCartClick = () => {
    navigate(routerLinks.CART);
    console.log("Add to cart");
  };

  return (
    <div className="item-container">
      <div className="item-image">
        <img src={product.imgUrl} alt={"product"} width={120} />
      </div>
      <span className="item-name">{product.name}</span>
      <span className="item-description">{product.description}</span>
      <span className="item-price">₹ {product.price}</span>
      <span className="item-availability">{product.availability}</span>
      <button
        className="add-to-wishlist"
        onClick={() => handleAddToWishlistClick()}
      >
        Add To Wishlist
      </button>
      <button className="add-to-cart" onClick={() => handleAddToCartClick()}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductDetail;
