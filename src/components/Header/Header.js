import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu-bar">
        <nav>
          <a href="/shop">Shop</a>
          <a href="/review">Order Review</a>
          <a href="/manage">Mange Inventory Here</a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
