import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarwrapper">
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <span className="name">Interview</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
