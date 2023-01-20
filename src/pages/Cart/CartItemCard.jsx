// vendors
import React from "react";

const CartItemCard = (props) => {
  return (
    <div className="cart-block" onClick={() => {}}>
      <div className="cart-info">
        <img src={""} alt="Product" />
        <span className="title">{"title"}</span>
      </div>
      <div className="cart-control">
        <span>Price</span>
        <span>
          <button>Delete</button>
        </span>
      </div>
    </div>
  );
};

export default CartItemCard;
