import React, { useState } from "react";
import { Link } from "react-router-dom";
import restaurantLogo from "../assets/chef-restaurant-logo.svg";
import shoppingCartIcon from "../assets/shopping-cart.svg";

const HeaderMenu = () => {
  const [buttonName, setButtonName] = useState("LOGIN");

  return (
    <div className="flex justify-between items-center list-none h-90  bg-gradient-to-r from-tangerine-faint to-tangerine-deep">
      <div className="restaurant-logo-container">
        <img
          className="w-[100px] h-[84px] p-1"
          src={restaurantLogo}
          alt="restaurant-logo"
        />
      </div>
      <div className="flex justify-between items-center list-none h-90">
        <ul className="flex justify-between items-center list-none h-90">
          <li className="p-2.5 m-2.5 text-lg cursor-pointer">
            <Link className="hover:text-white" to={"/"}>HOME</Link>
          </li>
          <li className="p-2.5 m-2.5 text-lg cursor-pointer">
            <Link className="hover:text-white" to={"/about"}>ABOUT US</Link>
          </li>
          <li className="p-2.5 m-2.5 text-lg cursor-pointer">
            <Link className="hover:text-white" to={"/contact"}>CONTACT US</Link>
          </li>
          <button
            onClick={() => {
              buttonName === "LOGIN" ? setButtonName("LOGOUT") : setButtonName("LOGIN");
                console.log(buttonName);
            }}
            className="text-black hover:text-white no-underline bg-none border-none p-[10px] m-[10px] text-lg cursor-pointer"
          >
            {buttonName}
          </button>
          <li className="p-2.5 m-2.5 text-lg cursor-pointer">
            <img
              className="w-8 h-8"
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
