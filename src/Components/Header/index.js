import React from "react";
import Soicon from "../sociicon";
import "./style.css";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="headermenu">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>
      <div>
        <Soicon />
      </div>
    </header>
  );
};

export default Header;
