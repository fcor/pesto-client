import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/img/basil2.png";

const animationCS = (isActive) => {
  if (isActive === null) {
    return "";
  } else if (isActive) {
    return "in";
  } else if (!isActive) {
    return "out";
  }
};

const Navbar = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(null);

  const location = useLocation();

  const handleClick = (e) => {
    setMobileMenuActive(!mobileMenuActive);
  };

  useEffect(() => {
    setMobileMenuActive(false);
  }, [location]);

  return (
    <div className="row header">
      <NavLink exact to="/">
        <figure>
          <img src={logo} alt="logo" className="navbar-logo"></img>
        </figure>
      </NavLink>
      {/* <div className={`menu row ${animationCS(mobileMenuActive)}`}>
        <NavLink exact className="menu-link" to="/about">
          About us
        </NavLink>
        <NavLink exact className="menu-link" to="/help">
          Help
        </NavLink>

        <NavLink to="/" className="mobile-menu-logo">
          <figure>
            <img src={logo} alt="logo" className="mobile-menu-logo"></img>
          </figure>
        </NavLink>
        <p className="footer-copyright-mobile">
          Copyright © 2023 Laboratory for biomolecular modeling, EPFL.
        </p>
      </div>

      <div
        onClick={handleClick}
        className={`hamburger-menu ${mobileMenuActive ? "active" : ""}`}
      >
        <div className={`bar b1 ${animationCS(mobileMenuActive)}`}></div>
        <div className={`bar b2 ${animationCS(mobileMenuActive)}`}></div>
        <div className={`bar b3 ${animationCS(mobileMenuActive)}`}></div>
      </div> */}
    </div>
  );
};

export default Navbar;
