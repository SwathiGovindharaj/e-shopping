// vendors
import React from "react";

import "./Footer.less";

const Footer = () => {
  const year = new Date().getFullYear();
  return <footer>{`Copyright © Shopping Cart ${year}`}</footer>;
};

export default Footer;
