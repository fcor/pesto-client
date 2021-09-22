import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="row header">
      <NavLink exact to="/">
        <figure>
          <img
            src="https://fakeimg.pl/200/200"
            alt="logo"
            className="navbar-logo"
          ></img>
        </figure>
      </NavLink>
      <div className="row menu">
        <NavLink exact className="menu-link" to="/about">
          About us
        </NavLink>
        <NavLink exact className="menu-link" to="/help">
          Help
        </NavLink>

      </div>
    </div>
  );
};

export default Navbar;
