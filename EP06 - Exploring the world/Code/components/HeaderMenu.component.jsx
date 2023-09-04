import React, { useState } from "react";
import restaurantLogo from "../assets/chef-restaurant-logo.svg";
import shoppingCartIcon from "../assets/shopping-cart.svg";

const HeaderMenu = () => {
  const [buttonName, setButtonName] = useState("LOGIN");

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
          <button 
            onClick={() => {
              buttonName === "LOGIN" ? setButtonName("LOGOUT") : setButtonName("LOGIN");
                console.log(buttonName);
            }}
            className="login-button"
          >
            {buttonName}
          </button>
          <li>
            <img
              className="cart-logo"
              src={shoppingCartIcon}
              alt="shopping-cart"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
