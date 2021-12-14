import React from "react";
import "./style.scss";
import logo from "assets/images/Logo.png";
import list from "assets/images/List.png";

const Header = () => {
  return (
    <div className="header-content">
      <div className="left-subcontent">
        <img
          className="logo-image"
          src={logo}
          alt="responsive"
          loading="lazy"
        />
      </div>
      <div className="right-subcontent" />
      <div className="right-subcontent">
        <div className="logo-text">212.555.5555</div>
        <div className="logo-text">Login</div>
        <div className="logo-text">
          <img className="list-image" src={list} width={20} alt="responsive" />
        </div>
      </div>
    </div>
  );
};

export default Header;
