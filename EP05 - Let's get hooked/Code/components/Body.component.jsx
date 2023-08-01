import React from "react";
import RestaurantCard from "./RestaurantCard.component";
import { restaurantList } from "../utils/restaurantData";

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input
          className="search-input"
          type="search"
          placeholder="FIND YOUR FAVOURITE RESTAURANT HERE..."
        />
        <button className="search-btn">search</button>
      </div>
      <div className="restaurant-card-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;