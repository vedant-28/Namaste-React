import React from "react";
import restaurantLogo from "../assets/chef-restaurant-logo.svg";
import shoppingCartIcon from "../assets/shopping-cart.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="restaurant-logo-container">
        <img
          className="restaurant-logo"
          src={restaurantLogo}
          alt="restaurant-logo"
        />
      </div>
      <div className="nav-items-container">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>
            <img className="cart-logo" src={shoppingCartIcon} alt="shopping-cart" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;