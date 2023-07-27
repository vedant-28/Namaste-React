import React from "react";
import ReactDOM from "react-dom/client";
import restaurantLogo from "./assets/chef-restaurant-logo.svg";
import shoppingCart from "./assets/shopping-cart.svg";
import "./index.scss";
/*
FoodFire app:
1) Header
  - logo
  - Nav items (links)
2) Body
  - Search
  - RestaurantContainer
    - RestaurantCard
      - Image
      - Name of restaurant, cuisine, star ratings, delivery time
3) Footer
  - Copyright info
  - Address
  - links
*/

// Header component:
const Header = () => {
  return(
    <div className="header">
      <div className="restaurant-logo-container">
        <img className="restaurant-logo" src={restaurantLogo} alt="restaurant-logo" />
      </div>
      <div className="nav-items-container">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>
            <img className="cart-logo" src={shoppingCart} alt="shopping-cart" />
          </li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/b7r9runu5yjkfsl20tri" alt="restaurant-food-image" />
      <h3>Meghna foods</h3>
      <span>Punjabi, North Indian</span>
      <span>⭐ 4.4</span>
      <span>ETA: 30 min</span>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input className="search-input" type="search" placeholder="FIND YOUR FAVOURITE RESTAURANT HERE..."/>
        <button className="search-btn">search</button>
      </div>
      <div className="restaurant-card-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

// Top level component:
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);