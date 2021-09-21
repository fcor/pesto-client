import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/help">
        Help
      </NavLink>
    </div>
  );
};

export default Navbar;
