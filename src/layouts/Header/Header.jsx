// vendors
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

// utils
import routerLinks from "../../data/routerLinks";

const Header = () => {
  const headerLinks = [
    {
      label: "Wishlist",
      to: routerLinks.WISHLIST,
      display: true,
    },
    {
      label: "Cart",
      to: routerLinks.CART,
      display: true,
    },
    {
      label: "Orders",
      to: routerLinks.ORDERS,
      display: true,
    },
    {
      label: "Sign Up",
      to: routerLinks.SIGN_UP,
      display: true,
    },
    {
      label: "Sign In",
      to: routerLinks.SIGN_IN,
      display: true,
    },
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Shopping Cart</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {headerLinks &&
            headerLinks
              .filter((link) => link.display)
              .map((link) => {
                return (
                  <Nav.Item>
                    <Nav.Link as={Link} to={link.to}>
                      {link.label}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
