import React from "react";
import { Link } from "react-router-dom";
import Nav from "../common/Nav";
import { NavButton } from "../common/Button";

const Navbar = () => {
  return (
    <Nav>
      <NavButton>
        <Link to="/">
          <i className="fas fa-guitar" />
          Shop
        </Link>
      </NavButton>

      <NavButton>
        <Link to="/cart">
          <i className="fa fa-shopping-cart" aria-hidden="true" />
          Cart
        </Link>
      </NavButton>
    </Nav>
  );
};

export default Navbar;
