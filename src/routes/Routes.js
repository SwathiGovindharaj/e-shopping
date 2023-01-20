// vendors
import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import ProductList from "../pages/Products/ProductList";
import ProductDetail from "../pages/Products/ProductDetail";
import Wishlist from "../pages/Wishlist/Wishlist";
import Cart from "../pages/Cart/Cart";
import Orders from "../pages/Orders/Orders";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

// utils
import routerLinks from "../data/routerLinks";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={routerLinks.HOME} element={<Home />} />
        <Route path={routerLinks.SIGN_IN} element={<SignIn />} />
        <Route path={routerLinks.SIGN_UP} element={<SignUp />} />
        <Route path={routerLinks.PRODUCTS_LIST} element={<ProductList />} />
        <Route path={routerLinks.PRODUCT_DETAIL} element={<ProductDetail />} />
        <Route path={routerLinks.WISHLIST} element={<Wishlist />} />
        <Route path={routerLinks.CART} element={<Cart />} />
        <Route path={routerLinks.ORDERS} element={<Orders />} />
        <Route path={routerLinks.PAGE_NOT_FOUND} element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
